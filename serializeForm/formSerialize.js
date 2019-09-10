/*
Lets serialize the following html form:

<form id="example-form">
    <input type="text" name="foo.bar" value="bar"/>
    <input type="text" name="foo.joe" value="baz"/>
    <input type="text" name="foo.baz.bar" value="do it!"/>
</form>

into JSON in the following format:

{
    foo: {
        bar: "bar",
        joe: "baz",
        baz: {
            bar: "do it!"
        }
    }
}

*/

const deepCopy = (sourceObj) => {
    return JSON.parse(JSON.stringify(sourceObj))
}

// O(N * K); Where N is the number of input nodes and k is the maximum number of periods in the name
const serializeForm = (formId) => {
    const inputs = document.querySelectorAll("input");
    let serializedForm = {};
    let tempObj = {};

    for (let i = inputs.length-1; i >= 0; i--) {
        const element = inputs[i] ;
        const nameArr = element.name.split('.');

        for (let j = 0; j < nameArr.length; j++) {
            const name = nameArr[j];
            const value = element.value;

            if (!serializedForm.hasOwnProperty(name)) {
                if (j===nameArr.length-1) {
                    serializedForm[name] = value;
                } else {
                }
            }
        }
        
        // for (let j = nameArr.length - 1; j >= 0; j--) {
        //     const name = nameArr[j];
        //     const value = element.value;
        //         if (j === nameArr.length - 1) {
        //             serializedForm[name] = value;
        //         } else {
        //             if (!serializedForm.hasOwnProperty(name)) {
        //                 tempObj = deepCopy(serializedForm);
        //                 serializedForm = {};
        //                 serializedForm[name] = tempObj;
        //             }
                    
        //         }  
        // }
    }
    return serializedForm;
    
}


const result = serializeForm("example-form");

console.log(result);
