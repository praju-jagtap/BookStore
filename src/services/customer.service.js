/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import CustomerDetails from '../models/customer.models';

//add customer details
export const addCustomerDetail = async (body) => {
    let customerAddressDetails = {
        'name': body.name,
        'phoneNumber': body.phoneNumber,
        'addressType': body.addressType,
        'fullAddress': body.fullAddress,
        'city': body.city,
        'landmark': body.landmark,
        'state': body.state,
        'pinCode': body.pinCode,
        'locality': body.locality
    };
    const customerData = await CustomerDetails.findOne({ userID: body.userID });
    if (customerData === null) {
        const createNewCustomer = await CustomerDetails.create({ userID: body.userID, customer: [customerAddressDetails] });
        console.log('create New Customer--->',createNewCustomer);
        return createNewCustomer;
    }
    else {
        const addAddressDetails = await CustomerDetails.findOneAndUpdate(
            { userID: body.userID },
            { $push: { customer: customerAddressDetails }},
            { new: true }
            );
        console.log('add Address Details--->',addAddressDetails);
        return addAddressDetails;
    }
};