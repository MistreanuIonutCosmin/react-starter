// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import useSWR from 'swr';
import { useRef, useEffect, useContext, useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { GraphQLClient } from 'graphql-request';
const Timeline = dynamic(() => import('react-calendar-timeline'), { ssr: false });

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_HASURA_BASE_URL, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET,
  },
});

const groups = [
  { id: 1, title: 'group 1' },
  { id: 2, title: 'group 2' },
];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
  },
];

const GET_ITEMS = `
query GET_ITEMS {
  items {
    group {
      id
      title
    }
    id
    start_time
    end_time
    title
  }
}
`;

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState([]);

  const { data: data } = useSWR(GET_ITEMS, (q, v) => client.request(q, v));

  useEffect(() => {
    if (data) {
      setGroups(data.items.map(obj => obj.group));

      setItems(
        data.items.map((item) => {
          return {
            id: item.id,
            title: item.title,
            start_time: moment(),
            end_time: moment().add(1, 'hour'),
            group: item.group.id,
          };
        })
      );
    }
  }, [data]);
  {console.log('items', {items, groups})}

  return (
    <>
      {groups.length && <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />}
    </>
  );
}
