export default {
    'get /api/goods':function(req, res){
        setTimeout(()=>{
            res.json({result:[{name:'3333'}, {name:'444'}]})
        },2000)
    }
}