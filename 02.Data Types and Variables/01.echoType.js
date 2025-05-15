function echo(param) {
    let type = typeof (param)
    console.log(type);
    if (type == 'string' || type == 'number') {
        console.log(param);
    } else {
        console.log('Pamameter is not suitable for ptinting')
    }
}

echo('Hello, JavaScript!')
echo(18)
echo(null)