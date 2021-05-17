import {useState, useCallback, useEffect} from 'react';
import {Snackbar, Button}  from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


    export const useMessage = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        
        setOpen(true)
        
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    return useCallback(text => {
        if (text) {
            // console.log(open);
            // <Snackbar anchorOrigin={{
            //         vertical: 'top',
            //         horizontal: 'center'
            //     }}
            //     open={open}
            //     autoHideDuration={1000}
            //     onClose={handleClose}
            //     message={text}
            //     action={
            //         <>
            //             <Button onClick={handleClose}></Button>
            //         </>
            //     }
            // />

            alert(text);
        
        }
    }, [])
    }