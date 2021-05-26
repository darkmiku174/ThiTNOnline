import mongoose from 'mongoose'

var submittionSchema  = new mongoose.Schema({
    De: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam"
    },
    SinhVien: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    DapAnSV: [{
        CauHoi:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question"
        },
        DapAn:{
            type:String,
        }
    }]
});

var Submittion = mongoose.model('Submittions', submittionSchema);

export default Submittion