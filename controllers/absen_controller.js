const AbsenModel = require('../models/absen_model')
const UserModel = require('../models/user_model')

 const getAbsen = async (req, res) => {
    try {
        let response;
        response = await AbsenModel.findAll({
            attributes:['bulan', 'userNik', 'hadir', 'izin', 'sakit', 'alpha'],
            include: [{model: UserModel, attributes:[ 'nik', 'nama']}]
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
 const getCheckAbsen = async (req, res) => {
    try {
        const response = await AbsenModel.findOne({
            where: {
                userNik: req.params.nik,
                bulan: req.params.bulan,
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

 const createAbsen = async (req, res) => {
    const {bulan, userNik, hadir, izin, izinT, sakit,sakit1, alpha, cuti} = req.body
    try {
        await AbsenModel.create({
            bulan: bulan, 
            userNik: userNik, 
            hadir: hadir, 
            izin: izin, 
            izinT: izinT, 
            sakit: sakit, 
            sakit1: sakit1, 
            cuti: cuti, 
            alpha: alpha})
        res.status(201).json({msg: 'Absen Created'})
    } catch (error) {
        res.status(500).json({msg: error.message})
        
    }
}
 const updateAbsen = async(req, res) => {
    const {name, price} = req.body

    try {
        const product = await ProductModel.findOne({
            where: {
                uuid: req.params.id
            },
            
        })
        if (!product) return res.status(404).json({msg: "Product tidak ditemukan"})
        // return res.status(201).json({product: product})

        if (req.role === 'user') {
            if (product.userId !== req.userId) return res.status(403).json({msg: "Akses ditolak"})
        }
        product.update({name, price}) 
        
        res.status(201).json({msg: 'Product Updated'})
        
    } catch (error) {
        res.status(500).json({msg: error.message})
        
    }
}
 const deleteProduct = async(req, res) => {
    try {
        const product = await ProductModel.findOne({
            where: {
                uuid: req.params.id
            },
            
        })
        if (!product) return res.status(404).json({msg: "Product tidak ditemukan"})

        if (req.role === 'user') {
            if (product.userId !== req.userId) return res.status(403).json({msg: "Akses ditolak"})
        }
        product.destroy() 
        
        res.status(201).json({msg: 'Product Deleted'})
        
    } catch (error) {
        res.status(500).json({msg: error.message})
        
    }
}

module.exports = {getAbsen, getCheckAbsen, createAbsen}