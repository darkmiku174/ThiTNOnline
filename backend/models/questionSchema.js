import mongoose from 'mongoose'

const questionSchema  = new mongoose.Schema({
    MonHoc: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
	PhanHoi: String,
	CauA: String,
	CauB: String,
    CauB: String,
    CauC: String,
    CauD: String,
    DapAn: Array,
    Diem: Number,
    PhanLoai: Number
});

var Question = mongoose.model('Questions', questionSchema);

export default Question