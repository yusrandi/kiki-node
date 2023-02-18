const AbsenModel = require('../models/absen_model')
const UserModel = require('../models/user_model')

 const getUsers = async (req, res) => {
    try {
        const response = await UserModel.findAll(
            {
                attributes:['nik', 'nama', 'jabatan', 'role'],
                include: [{model: AbsenModel, 
                attributes:['bulan', 'userNik', 'hadir', 'izin', 'sakit', 'alpha', 'izinT', 'sakit1', 'cuti' ]
                    
                    }],

                where: {
                    role: req.params.role
                }

            }
        )
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
 const getUserById = async (req, res) => {
    try {
        const response = await UserModel.findOne({
            where: {
                nik: req.params.nik
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
 const createUser = async (req, res) => {
    const {nik, nama, jabatan, role} = req.body
    
    try {
        await UserModel.create({
            nama: nama,
            nik: nik,
            jabatan: jabatan,
            role: role,
        })
        res.status(200).json({msg: 'User Created'})

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
 const updateUser = async (req, res) => {
    const {nik, nama, jabatan, role} = req.body
    const user = await UserModel.findOne({
        where: {
            nik: req.params.nik
        }
    })
    if (!user) return res.status(400).json({msg: "User tidak ditemukan"})
   
    try {
         await user.update({
            nik: nik,
            nama: nama,
            jabatan: jabatan,
            role: role,
        })

        res.status(200).json({msg: 'User Updated'})

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
 const deleteUser = async (req, res) => {
    const user = await UserModel.findOne({
        where: {
            nik: req.params.nik
        }
    })
    if (!user) return res.status(400).json({msg: "User tidak ditemukan"})
    
    try {
         await user.destroy()
        res.status(200).json({msg: 'User Deleted'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser}