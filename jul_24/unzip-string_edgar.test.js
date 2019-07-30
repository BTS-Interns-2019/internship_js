test ('8sdf3gh', function () {
    expect (unzipString ("4sdf3gh")).toBe ("ssssddddffffggghhh")
})

test ('2m3gt', function () {
    expect (unzipString ("2m3gt")).toBe ("mmgggttt")
})

test ('g4y3ght', function () {
    expect (unzipString ("g4y3ght")).toBe ("gyyyyggghhhttt")
})

test ('zip3l', function () {
    expect (unzipString ("zip3l")).toBe ("ziplll")
})


const unzipString = require ('./unzip-string_edgar.js');
