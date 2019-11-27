> :1st_place_medal:
> WINNER OF CODING CHALLEGE
> Article series about the contest and solutions:
> https://www.solidabis.com/ajankohtaista/koodihaastekatsaus-osa-1-voittajat-ja-yleiskatsaus/

The app is hosted in Heroku: http://finnish-detector.herokuapp.com/ 

# JS text decypter and language analyzer with React UI

Coding challenge where the task was to decypt sentences and recognize finnish text. 
The input data is  encypthed with Caesar-cipher. The key is random to all data points. All the data is not translatable to finnish, but gibberish.

## Decrypting algorithm
The approch to find the correct sentences was the following:

1. Decrypt the Caesar-cipher
-- Iteration of changing letters trough finnish alfabet
2. Analyze the language matching to finnish language
-- Generate a n-gram model for finnish language from training set of aprox. 2700 finnish news headlines
-- Score each Caesar-ciphered candidate sentence with the model
3. Save the highest scored decrypted output for finnish language for every Caesar-cipher key iteration 

Code for the algo: src/services/

## Web UI

A React UI for the presentation of the results. The actual model creation and data scoring is also done in frontend as the app loads, which is not ideal for production. But this is sufficient for the coding challenge and proofs that the code actually runs :)
