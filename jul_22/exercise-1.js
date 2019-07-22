/**
 * Escribir 3 ejemplos usando try...catch que incluyan 
 * switch
 * for
 * while
 * return
 * finally
 * typeof
*/ 
 
/**
 * Example 1 try...catch
 * typeof, return
 */
function withdrawFunds(funds) {
    let balance = 1500;
    try {
        if (typeof balance !== typeof funds) {
            throw new Error("Input not valid");
        }

        if (balance < funds) {
            throw new Error("You don't have enough money in your account");
        }

        return `Funds withdrawn, you now have ${balance - funds}`;
    } catch (error) {
        return error.message;
    }
}

// Tests
// console.log(withdrawFunds(1000));
// console.log(withdrawFunds(2000));
// console.log(withdrawFunds('1500'));

/**
 * Example 2 try...catch
 * for, switch, finally
 */
function connectToApi(credentials) {
    const admin = {
        user: 'admin',
        password: '123456',
    };
    let statusCode;

    try {
        for (let credential of credentials) {
            if (admin.user !== credential.user || admin.password !== credential.password) {
                throw new Error("403");
            }
        }

        statusCode = "200";
    } catch (error) {
        statusCode = error.message;
    } finally {
        switch (statusCode) {
            case "200":
                return "Everything in order. Please, proceed.";
                break;
            case "403":
                return "One of the users is not authorized to connect to the API."
        }
    }
}

const user1 = {
    user: 'admin',
    password: '123456',
};
const user2 = {
    user: 'admin',
    password: '123456',
};
const user3 = {
    user: 'user3',
    password: '654321',
};

// Tests
// console.log(connectToApi([user1, user2, user3]));
// console.log(connectToApi([user1, user2]));

/**
 * Example 3 try...catch
 * while
 */
function numbersUntil(number) {
    let counter = 0;

    try {
        if (!Number.isInteger(number)) {
            throw new Error("Please, provide an integer positive number.");
        }

        while (counter <= number) {
            console.log(counter);
            counter++;
        }

        return "Everything went smoothly."
    } catch (error) {
        return error.message;
    }
}

// Tests
// console.log(numbersUntil(50));
// console.log(numbersUntil('60'));