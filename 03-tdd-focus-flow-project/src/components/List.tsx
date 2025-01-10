import { type Item } from '../utils';
import ItemCard from './ItemCard';

const List = ({
  items,
  onDelete,
}: {
  items: Item[];
  onDelete: (id: string) => void;
}) => {
  return (
    <div>List</div>
  );
};

export default List;