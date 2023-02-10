const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    shippingInfo:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        pinCode:{type:Number,required:true}
    },
    orderInfo:[{
        name:{type:String,required:true},
        image:{type:String,required:true},
        quantity:{type:Number,required:true},
        price:{type:Number,required:true},
        product:{type:mongoose.Types.ObjectId,ref:"Product",required:true},

    }],
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    paymentInfo:{
        id:{type:String,required:true},
        status:{type:String,required:true},

    },
    paidAt:{
        type:Date,required:true
    },
    itemsPrice:{
        type:Number,default:0,required:true
    },
    taxPrice:{
        type:Number,default:0,required:true
    },
    shippingPrice:{
        type:Number,default:0,required:true
    },
    totalPrice:{
        type:Number,default:0,required:true
    },
    orderStatus:{type:String,required:true,default:"Stock"},
    deliveredAt:Date,
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports=mongoose.model("Order",orderSchema)