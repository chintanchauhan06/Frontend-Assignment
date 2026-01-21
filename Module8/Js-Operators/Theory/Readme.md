Question 1: What are the different types of operators in JavaScript? Explain with examples.

•Arithmetic operators
•Assignment operators
•Comparison operators
•Logical operator


1. Arithmetic Operators

Used to perform mathematical calculations.

Operator	    Description	                Example

+	            Addition	                10 + 5 → 15
-	            Subtraction	                10 - 5 → 5
*	            Multiplication	            10 * 5 → 50
/	            Division	                10 / 5 → 2
%	            Modulus (remainder)	        10 % 3 → 1
++	            Increment	                a++
--	            Decrement	                a--



2. Assignment Operators

Used to assign values to variables.

Operator	Example	        Meaning
=	        x = 5	        Assign
+=	        x += 2      	x = x + 2
-=	        x -= 1      	x = x - 1
*=	        x *= 3      	x = x * 3
/=	        x /= 2	        x = x / 2



3. Comparison Operators

Used to compare two values and return true or false.

Operator	Description	                Example
-
==	        Equal to	                5 == "5" → true
===	        Strict equal	            5 === "5" → false
!=	        Not equal	                5 != 3 → true
!==	        Strict not equal	        5 !== "5" → true
>	        Greater than	            10 > 5
<	        Less than	                3 < 7
>=	        Greater or equal	        5 >= 5
<=	        Less or equal	            4 <= 6



4. Logical Operators

Used to combine multiple conditions.

Operator	Name	Description

&&	        AND	    True if all conditions are true		
!	        NOT	    Reverses the result
||          OR      False if Both Condition Are False




Question 2: What is the difference between == and === in JavaScript?

Ans : 

In JavaScript, == and === are comparison operators, but they behave differently.

1. == (Loose Equality Operator)

Compares values only
Automatically converts data types (type coercion)
Less strict


2. === (Strict Equality Operator)

Compares both value and data type
No type conversion
More reliable and recommended




