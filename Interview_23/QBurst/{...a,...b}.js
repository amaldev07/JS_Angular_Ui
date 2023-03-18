let a = {
    fn: 'Amal',
    ln: 'dev'
}
let b = {
    fn: 'name1',
    ln: 'ln1'
}
let c = { ...a, ...b }
/* Output : {fn: 'name1', ln: 'ln1'} */
// ------------------------------------------------------
let a1 = {
    fn: 'Amal',
    ln: 'dev',
    other: {
        mark: 11,
        age: 12,
        state: 'KL',
        a: 1
    }
}
let b1 = {
    fn: 'name1',
    ln: 'ln1',
    other: {
        mark: 111,
        age: 122,
        state: 'KA',
        b: 2
    }
}
let d = { ...a1, ...b1 }

/* Output
let op = {
    'fn': 'name1',
    'ln': 'ln1',
    'other': {
        'mark': 111,
        'age': 122,
        'state': 'KA',
        'b': 2
    }
} */
