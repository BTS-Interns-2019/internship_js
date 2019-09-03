let fibonacci = (function fibonacci() {
    let dictionary = [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n, 89n, 144n, 233n, 377n, 610n, 987n, 1597n, 2584n]
    return function (ni) {
        function internFib(n) {
            if (dictionary[n] === undefined) {
                dictionary[n] = internFib(n - 1) + internFib(n - 2)
            }
            return dictionary[n]
        }

        // avoid max call stack
        while (dictionary.length < Math.abs(ni)) {
            internFib(dictionary.length + 10)
        }

        return internFib(Math.abs(ni))
    }
})()


module.exports = fibonacci;
