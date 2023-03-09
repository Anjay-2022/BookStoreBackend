import customerdb from '../models/customerDetails.model';

//Add a book to cart
export const addAddress = async (body) => {
    const data = await customerdb.findOne({ email: body.email })
    let customerdetails = {
        "name": body.name,
        "phoneNumber": body.phoneNumber,
        "addressType": body.addressType,
        "fullAddress": body.fullAddress,
        "landmark": body.landmark,
        "state": body.state,
        "pinCode": body.pinCode,
        "locality": body.locality
    }
    if (data == null) {
        const customerOne = []
        customerOne.push(customerdetails)
        body.customer = customerOne
        const createAddress = await customerdb.create({
            email: body.email,
            customer: body.customer
        })
        return createAddress
    } else {
        data.customer.push(customerdetails)
        await data.save()
        return data
    }
};
export const updateAddress = async (id,body) => {
    const data = await customerdb.findOne({ email: body.email })
    let customerdetails = {
        "name": body.name,
        "phoneNumber": body.phoneNumber,
        "addressType": body.addressType,
        "fullAddress": body.fullAddress,
        "landmark": body.landmark,
        "state": body.state,
        "pinCode": body.pinCode,
        "locality": body.locality
    }
    if (data != null) {
        const addExist = await data.customer.find((value) => value._id == id)
        if (addExist != null) {
            const removeAdd = await data.customer.splice(data.customer.findIndex(a => a._id == id), 1)
            data.customer.push(customerdetails)
            data.save()
            return data
        } else {
            throw new Error("No address found for user with this id")
        }
    } else {
        throw new Error("User didn't have Address yet")
    }
};


export const deleteAddress = async (id, body) => {
    const data = await customerdb.findOne({ email: body.email })
    if (data != null) {
        const addExist = await data.customer.find((value) => value._id == id)
        if (addExist != null) {
            const removeAdd = await data.customer.splice(data.customer.findIndex(a => a._id == id), 1)
            data.save()
            return data
        } else {
            throw new Error("No address found for user")
        }
    } else {
        throw new Error("User didn't have Address yet")
    }
}

