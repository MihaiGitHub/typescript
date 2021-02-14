interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// tell typescript
// this component is a React Function Component
// this component might have properties assigned to it like 'propTypes'
// this component will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
// can use ChildAsFC.displayName etc and other React component methods
