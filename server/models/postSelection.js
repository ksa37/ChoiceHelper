import mongoose from 'mongoose';

const selectionSchema = mongoose.Schema({
    options: [String],  // sort된 상태로 넣기, 최근 고민/핫한 고민을 위해 저장
    // timestamp: String,  // 최근 고민을 위해 저장
    repeat: Number,  // 같은 옵션을 몇 번 수행했는지 기록하기 위해 저장 (핫한 고민)
    selected_option: String, // (랜덤하게) 선택된 옵션, 공유 기능을 위해 저장
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// const keywordsSchema = mongoose.Schema({
//     // 
// });

const PostSelection = mongoose.model('PostSelection', selectionSchema);

export default PostSelection;