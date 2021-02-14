interface ChildProps {
  color: string;
  onClick: () => void;
}

// associate ChildProps interface with this component
// this way of writing the component it is not able to receive children
// by default
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// tell typescript
// this component is a React Function Component
// this component might have properties assigned to it like 'propTypes'
// this component will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};
// can use ChildAsFC.displayName etc and other React component methods
