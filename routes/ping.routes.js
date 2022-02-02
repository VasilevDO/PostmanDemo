const {Router} = require ('express');
const config = require ('config');

const router=Router();

router.post('/',
    async (req,res) => {
        console.log('POST REQUEST')
        try {
            const {message}=req.body;
            if (!message) {
                return res.status(400).json({message:'Invalid request body'})
            }
            const response=message.split('').reverse().join('');
            return res.status(200).json({
                message:response
            })
        } catch (e) {
            res.status(500).json({message:e.message})
        }
    }
)

router.get('/',
    async (req,res) => {
        console.log('GET REQUEST')
        try {
            return res.status(200).json({message:'GET response'})
        } catch (e) {
            return res.status(500).json({message:'Something went wrong'})
        }
    }
)

module.exports=router;