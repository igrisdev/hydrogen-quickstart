export const ContainerWidth = ({element = 'section', className = ''}) => {
  const styles = `container mx-auto px-[1rem] sm:px-[32px] ${className}`;

  const Tag = element;

  return (
    <Tag className={styles}>
      <slot />
    </Tag>
  );
};
