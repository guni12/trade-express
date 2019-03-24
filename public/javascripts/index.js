var obj = {
    info: {
        find: function() {
            return [
                {
                    "header": "Front",
                    "description": [
                        "In ten years time 100TWh fossile power, "
                        + "now used to drive vehicle, will be replaced by 30TWh electric power.",
                        "Most of the electric power will "
                        + "be distributed through existing powerlines.",
                        "With good political descisions we can avoid expensive investments, "
                        + "only needed for extreme load on the powerline.",
                        "In Swedish we call this system dELa",
                        "",
                        "In our prototype we have an Electrical Station "
                        + "that supplies 100 households with current. "
                        + "Every household has the right to extract 25A at every given moment.",
                        "But if everyone would use 25A at the same time, there will be problems.",
                        "At the most there is something like 40% as a maximum"
                        + " effect rate to go around.",
                        "If we want to have enough energy for everybody when electric cars "
                        + "will be more frequent we have to share with some control algorithm.",
                        "One way to share is to allow the car battery to also sell"
                        + " their energy when the owner does not need to drive "
                        + "in the nearest time and when the battery has enough power.",
                        "The owner of the electric car might want to sell when the price is right."
                    ]
                }
            ];
        }
    }
};

module.exports = obj;
