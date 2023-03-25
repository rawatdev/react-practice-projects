const List = ({ data, renderComponent: RenderComponent }) => {
  return (
    <div>
      {data.map((item) => {
        return <RenderComponent key={item.id} {...item} />
      })}
    </div>
  )
}

export default List
