const EventComponent: React.FC = () => {
  // to find out what event type it is, hover mouse over onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
