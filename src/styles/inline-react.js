/*
export Flexbox
export BoxShadows
*/

export const Flexbox = {

    //Centered : Centered along X & Y
    //Shifted : Shifted to center along X.


    //Rows
    flexRow: {
        boxSizing: 'border-box',
        display: 'flex',
    },

    flexRowCenter: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    flexRowShift: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center'
    },

    flexRowWrap: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',

    },

    flexRowCenterWrap: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },

    flexRowShiftWrap: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },


    //Columns


    flexColumn: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',

    },

    flexColumnCenter: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },

    flexColumnShift: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

export const BoxShadows = {


};


