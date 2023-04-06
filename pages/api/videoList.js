
import excuteQuery from './../../lib/db'
export default async function videoList(req,res){
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM video_lists',
            values: [],
        });
     
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(result))
        return result;
    } catch (error) {
        console.log(error);
        res.status(500).json({res:"Error"})
    }
    
}