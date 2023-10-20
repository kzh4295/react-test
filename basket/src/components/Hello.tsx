export const Hello = (props: { name: string }) => {
  return <h1>Hello, {props.name}!!</h1>
}

export const Hello2 = ({id, name}:{id:number,name:string}) => {
  return <h1 style={{fontWeight:'700'}}>Hello, {id && name}</h1>
}

Hello.defaultProps = { name :'시코' }