type Props = JSX.HTMLAttributes<HTMLDivElement>;

function Tab(props: Props) {
  const { children, ...rest } = props;

  return <div {...rest}>{children}</div>;
}

export default Tab;
