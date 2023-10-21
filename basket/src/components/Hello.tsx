type HelloProps = {
  name: string;
}
type HelloProps2 = {
  id:number;
  name: string;
}

export const Hello = ({name='시코'}:HelloProps) => {
  return <h1>Hello, {name}!!</h1>
}

export const Hello2 = ({id, name}:HelloProps2) => {
  return <h1 style={{fontWeight:'700'}}>Hello, {id && name}</h1>
}

Hello.defaultProps = { name :'시코' }