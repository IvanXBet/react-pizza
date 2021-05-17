import React, {Component} from 'react';
import {connect} from 'react-redux';
import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {reloadOrder} from '../actions/index';



export const useRealodOrder = () => {
    const arr = [];
    const dispatch = useDispatch();

    return useCallback(
        () => {
            if(localStorage.getItem('dateOrder') == null) {
                // dispatch(reloadOrder(arr))
                console.log(arr)
           } else {
                const order = JSON.parse(localStorage.getItem('dateOrder'))
                // dispatch(reloadOrder(order))
                console.log(order)
           }
        },
        [],
    )
}

