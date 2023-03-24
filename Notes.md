Notes:

npm run app
npm run gsm и след това npm run android

https://www.npmjs.com/package/react-native-vector-icons
https://oblador.github.io/react-native-vector-icons/ - choose icons

https://food52.com/recipes/new - design for the products

For comparison: https://npmtrends.com/forms-vs-react-form-vs-react-native-form-vs-react-native-form-validator-vs-react-native-formik 

Databases:
https://reactnative.directory/?search=storage
Winner of the comparison is @react-native-async-storage/async-storage

Docs for the above: https://react-native-async-storage.github.io/async-storage/docs/usage

https://reactnative.dev/docs/sectionlist



----------------------------------------------------------------------------------------------------------------------------------
Done tasks:

Week - 09.01 - 15.01
1) да показвам всички рецепти на Search страницата -- DONE
2) да оправя useEffect-a на SearchScreen-a да показва рецептите веднага след добавяне (а не само при стартиране на приложението) -- DONE
   
Week - 16.01 - 22.01
1) да поизчистя кода и да си ъпдейтна списъка със задачки -- DONE
2) Да ми се появява някакъв сигнал, че рецептата е била успешно добавена - модал -- DONE


Week - 13.02 - 19.02
1)  да се изчистват полетата след като съм добавила вече рецептата -- DONE

Week - 20.02 - 26.02
1)  Да оправя Search страницата - в началото не се показват рецептите (само при стартиране на приложението) -- DONE

18 mart
1) Довършвам част от validateInputFieds

22 mart
1) добавих warning, ако user-a не е въвел title, products или steps или е с повтарящо се име - в AddRecipeScreen добавих validateInputFieds() - да я довърша като добаея messages

24 mart 
1) извадих AddRecipeProductInputField в отделен компонент заедно с + бутона (както направих за AddRecipeInputField)

To do list:
1) да направя отделен компонент за Category
2) да оправя на Search page-a да има скрол като сме добавили повече рецепти
3) да вкарам в SectionList използването на RecipeItem за всяка една добавена рецепта на Search страницата
4) да измисля дизайн за RecipeMini на search page-a
5) ако се кликне върху RecipeMini да има като пдп на recipe-то
6) Edit mode на рецептите (може би на пдп)
7) нова страница - Planner за седмично меню
   1) да има като графи за всеки ден от седмицата, където да напишеш какво ще има за закуска, обяд и вечеря
8) https://blog.codemagic.io/improve-react-native-app-performance/
   1) webp формат на картинките
   2) да махна inline функциите, както и arrow функциите, за да няма ререндърване
   3) react-native-fast-image - https://blog.codemagic.io/improve-react-native-app-performance/
   4) it is preferable to use StyleSheet.create - because it passes a reference instead of creating a new reference of the object/array