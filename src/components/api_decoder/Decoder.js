import FETCH_API from './Fetch_Api';
class Decoder {
    decode(type, title){
        let get_contents = new FETCH_API.get_blog_contents()
        get_contents(type, title)
    }
}