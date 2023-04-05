import { useContext } from 'react';
import { placeOrder } from '../../backend/firebaseFunctions';
import { useInput } from '../../hooks/useInput';
import { CartContext } from '../../store/cart-context';
import classes from '../Cart/Cart.module.css';
import { OrderFormInput } from '../Cart/OrderFormInput';

export const Form = () => {
    const cartCtx = useContext(CartContext);

    const [
        nameInputValue,
        eraseNameValue,
        setUnblurName,
        onChangeNameValue,
        setNameBlur,
        nameStyles,
    ] = useInput();

    const [
        lastNameInputValue,
        eraseLastNameValue,
        setUnblurLastName,
        onChangeLastNameValue,
        setLastNameBlur,
        lastNameStyles,
    ] = useInput();

    const [
        cityInputValue,
        eraseCityInputValue,
        setUnblurCity,
        onChangeCityValue,
        setCityBlur,
        cityStyles,
    ] = useInput();

    const [
        streetInputValue,
        eraseStreetInputValue,
        setUnblurStreet,
        onChangeStreetVaue,
        setStreetBlur,
        streetStyles,
    ] = useInput();

    const [
        houseNumInputValue,
        eraseHouseNumValue,
        setUnblurHouseNum,
        onChangeHouseNumValue,
        setHouseNumBlur,
        houseNumStyles,
    ] = useInput();

    const unBlurInputs = () => {
        setUnblurName();
        setUnblurCity();
        setUnblurHouseNum();
        setUnblurLastName();
        setUnblurStreet();
    };

    const eraseInputs = () => {
        eraseNameValue();
        eraseLastNameValue();
        eraseCityInputValue();
        eraseStreetInputValue();
        eraseHouseNumValue();
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        eraseInputs();
        unBlurInputs();
        const dataToSend = {
            name: nameInputValue + ' ' + lastNameInputValue,
            address:
                cityInputValue +
                ', ' +
                streetInputValue +
                ' ' +
                houseNumInputValue,
            meals: cartCtx.items,
        };
        placeOrder(dataToSend)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={onSubmitHandler} className={classes['container']}>
            <div className={classes['block']}>
                <OrderFormInput
                    title="Name: "
                    value={nameInputValue}
                    onChangeValue={onChangeNameValue}
                    setBlur={setNameBlur}
                    styles={nameStyles}
                />
                <OrderFormInput
                    title="Last Name: "
                    value={lastNameInputValue}
                    onChangeValue={onChangeLastNameValue}
                    setBlur={setLastNameBlur}
                    styles={lastNameStyles}
                />
            </div>
            <div className={classes['block']}>
                <OrderFormInput
                    title="City: "
                    value={cityInputValue}
                    onChangeValue={onChangeCityValue}
                    setBlur={setCityBlur}
                    styles={cityStyles}
                />
                <OrderFormInput
                    title="Street: "
                    value={streetInputValue}
                    onChangeValue={onChangeStreetVaue}
                    setBlur={setStreetBlur}
                    styles={streetStyles}
                />
                <OrderFormInput
                    title="House Number: "
                    value={houseNumInputValue}
                    onChangeValue={onChangeHouseNumValue}
                    setBlur={setHouseNumBlur}
                    styles={houseNumStyles}
                />
            </div>
            <div className={classes.actions}>
                <button
                    type="submit"
                    className={`${classes.margined_top} ${classes.button}`}
                >
                    Place Order
                </button>
            </div>
        </form>
    );
};
