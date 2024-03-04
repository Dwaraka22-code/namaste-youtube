import Button from './Button';

const ButtonList = () => {
  const list = [
    'All',
    'Gaming',
    'Songs',
    'Live',
    'Soccer',
    'Cricket',
    'Cooking',
    'News',
    'Valentines',
  ];
  return (
    <div className=" flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};
export default ButtonList;
