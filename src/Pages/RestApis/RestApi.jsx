import React, { useState, useEffect } from "react";
import { getDataFromAPIByID } from "./RestApi.js";
import DifficultyIndicator from "./DifficultyIndicator";

function RestApi() {
  const [data, setData] = useState({
    id: "5",
    title: "Vegan chocolate cake",
    difficulty: "Easy",
    portion: "Serves 12",
    time: "Hands-on time 40 min, plus cooling and a few hours firming; Oven time 1 hour 5-10 min",
    description:
      "Our vegan chocolate cake is dairy-free and egg-free and comes with a vegan buttercream, amaretto and jam filling, and is covered in a gorgeously silky ganache. It’s stop-you-in-your-tracks good!",
    ingredients: [
      "300ml unsweetened soy milk",
      "1 tbsp finely ground/milled chia seeds",
      "1 tbsp lemon juice",
      "1 tsp instant coffee powder",
      "2 tsp vanilla extract",
      "150g vegan spread, such as Vitalite or Flora 100% Natural, melted",
      "3 tbsp agave nectar",
      "175g caster sugar",
      "35g cocoa powder",
      "300g self-raising flour",
      "200g dairy-free dark chocolate (about 45% cocoa solids)",
      "250ml plant-based double cream alternative – we used Elmlea Plant",
      "1 tbsp agave nectar",
      "90g vegan spread",
      "1 tsp vanilla extract",
      "1 tbsp unsweetened soy milk",
      "2 1⁄2 tbsp cocoa, sifted",
      "180g icing sugar, sifted",
      "4-8 tbsp vegan amaretto",
      "6 tbsp good quality black cherry jam (see Tips)",
    ],
    method: [
      {
        "Step 1":
          "Heat the oven to 160°C fan/ gas 4. Line the base and sides of the cake tin. In a large jug, whisk together the soy milk, chia, lemon juice, coffee powder, vanilla, melted spread and agave nectar. Set aside for 5 minutes (don’t worry if it looks curdled).",
      },
      {
        "Step 2":
          "Sift the sugar, cocoa and flour into a large bowl. Pour in the wet mix, whisk with a balloon whisk until smooth, then spoon into the prepared tin, smoothing the top. Bake for 45 minutes, then cover loosely with foil and cook for 25-30 minutes until springy to the touch and a skewer pushed into the centre comes out clean. Transfer to a cooling rack for an hour, then remove from the tin and leave to cool completely (see Make Ahead).",
      },
      {
        "Step 3":
          "For the ganache, put all the ingredients in a bowl set over a pan of barely simmering water. Stir occasionally until melted (or microwave on a medium heat for about 3 minutes). Remove from the heat and leave somewhere cool until it begins to firm up – this may take a few hours. To cool it faster, put the bowl in a larger bowl filled with iced water. Stir every minute or so to ensure it doesn’t get too firm – when you lift out the spoon and gently let a little ganache fall back onto the mix, it should briefly form a visible line (ribbon) on top.",
      },
      {
        "Step 4":
          "For the buttercream, use an electric mixer to beat the spread until pale. Whisk in the vanilla and soy milk to combine. Add the cocoa and icing sugar, then beat until pale and fluffy.",
      },
      {
        "Step 5":
          "To assemble, use a sharpknife to cut the cooled cake into 3 layers. Drizzle the cut side of each layer with 1-2 tbsp amaretto. (If you have time, put the drizzled layers in the freezer for an hour to firm up and make assembling/decorating easier.)",
      },
      {
        "Step 6":
          "Spread the top of the bottom and middle layers with half the buttercream each, then add half the jam to each, spreading thinly until about 1cm from the edge. Stack the cake layers using the undecorated one as the top, then transfer to a serving plate.",
      },
      {
        "Step 7":
          "Use a palette knife to spread the ganache on the sides so they’re well covered, then pile and swirl the rest on top. Leave the cake in a cool place for a few hours until firm enough to cut.",
      },
    ],
    image: "https://apipics.s3.amazonaws.com/cakes_api/5.jpg",
  });

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await getDataFromAPIByID(5);
    //   setData(result);
    // };
    // fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex uppercase font-bold text-white">
        <div className="w-[45%] text-right bg-[#75c2b1] p-2">
          More Recipes...
        </div>
        <div className="w-[10%] text-center bg-[#75c2b1] p-2">|</div>
        <div className="w-[45%] bg-[#75c2b1] p-2">Contact Form</div>
      </div>
      {data ? (
        <div className="bg-white rounded-lg">
          <div className="p-20">
            <div
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              className="relative bg-no-repeat bg-cover bg-center"
            >
              <img
                className="w-full max-h-[800px] rounded-xl object-contain z-50"
                src={data.image}
                alt={data.title}
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-7 rounded-b-3xl">
                <h1 className="text-center font-bold text-3xl w-full max-w-[100%] mx-auto">
                  {data.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 flex my-8 justify-center text-2xl p-10 shadow-md border-b-2 border-gray-300">
            <div className="text-center">
              <strong>Time: </strong> {data.time}{" "}
            </div>
          </div>
          <div className="py-5 p-20">
            <DifficultyIndicator difficulty={data.difficulty} />

            <h4 className="py-2 text-2xl">
              <strong>Portion: </strong> {data.portion}
            </h4>
            <h6 className="py-2 text-2xl">
              <strong>Description:</strong> {data.description}
            </h6>
          </div>
          <div className="flex my-10">
            <div className="w-[50%]">
              <div className="px-20 py-5 text-3xl text-black bg-blue-100 font-semibold">
                Ingredients:
              </div>
              <ul className="list-none px-20 py-5">
                {data.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center py-1">
                    <input
                      id={ingredient}
                      type="checkbox"
                      className="form-checkbox h-5 w-5 accent-green-500 border-5 border-green-500 rounded-lg"
                    />
                    <label htmlFor={ingredient} className="ml-2 text-lg">
                      {ingredient}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[50%]">
              <div className="px-20 py-5 text-3xl text-black bg-blue-100 font-semibold">
                Method:
              </div>
              <div className="px-20 py-5">
                {data.method?.map((method, index) => {
                  const methodEntries = Object.entries(method)[0];
                  return (
                    <div key={index} className="pb-4">
                      <p className="text-[22px] font-semibold text-[#316b5e]">
                        {methodEntries[0]}
                      </p>
                      <p className="text-gray-700">{methodEntries[1]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default RestApi;
