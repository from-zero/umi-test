import Redirect from 'umi/redirect'

export default function PrivateRoute(props) {
    if(new Date().getDay()%2 == 1){
        return <Redirect to={{pathname:'/login', state:{redirect: props.location.pathname}}}></Redirect>
    }
    return (
        <div>
            Private
            {props.children}
        </div>
    )
}
