"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3518],{42601:e=>{e.exports=JSON.parse('{"functions":[{"name":"State","desc":"The state library is very useful when working with whiplash. \\n\\nYou can import the state Library by using `PowerHorseEngine:Import(\\"State\\")`;\\n\\nLearn more about `states` [here]\\n\\n:::info Button Increment Example\\n```lua\\n--\x3e Local script\\nlocal State = :Import(\\"State\\");\\nlocal Whiplash = :Import(\\"Whiplash\\");\\nlocal New,OnEvent = Whiplash.New,Whiplash.OnEvent;\\n\\nlocal ClickCount,setClickCount = State(0);\\nlocal ButtonDisplayText,setButtonDisplayText = State(\\"\\");\\n\\nClickCount:useEffect(function()\\n    setButtonDisplayText(\\"You clicked \\"..tostring(ClickCount())..\\" times\\");\\nend);\\n\\nNew \\"ScreenGui\\" {\\n    Parent = game.Players.LocalPlayer:WaitForChild(\\"PlayerGui\\");\\n    Name = \\"WhiplashExample1\\"\\n    New \\"$Button\\" {\\n        AnchorPoint = Vector2.new(.5,.5);\\n        Position = UDim2.fromScale(.5,.5);\\n        Text = ButtonDisplayText;\\n        [OnEvent \\"MouseButton1Down\\"] = function()\\n            setClickCount(function(oldClickCount)\\n                return oldClickCount+1;\\n            end);\\n            --[[\\n            alternatively we could\'ve updated the ButtonDisplayText here instead of using the effect of click count\\n            the downside of that is if clickCount was updated elsewhere, the ButtonDisplayText will not be updated.\\n                \\n            Alternate:\\n                setButtonDisplayText(\\"You clicked \\"..tostring(ClickCount())..\\" times);\\n            ]]\\n        end;\\n    }\\n}\\n\\n```\\n\\n:::","params":[],"returns":[],"function_type":"method","source":{"line":87,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"getThisValue","desc":"Creates a new component based off of the class. Whiplash is not centered around Pseudo components, You can \\nbuild Instance as well.\\n\\nTo create an Instance, you will just pass the ClassName as the class argument. Similar to Instance.new \\nBut to create a Pseudo component, you need to put `$` at the start of the class.\\n\\n:::info\\n`$Text` - Pseudo \\"Text\\" Component\\n\\n`TextLabel` - Roblox \\"TextLabel\\" Component\\n:::info","params":[{"name":"object","desc":"","lua_type":"any"},{"name":"thispath","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"any\\r\\n"}],"function_type":"static","source":{"line":120,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"this","desc":"","params":[{"name":"followOrder","desc":"","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"table\\r\\n"}],"function_type":"static","source":{"line":194,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"Execute","desc":"","params":[{"name":"a","desc":"","lua_type":"any"},{"name":"b","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","source":{"line":220,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"ForEach","desc":"`ForEach` let\'s you create loops within Whiplash components. If you return a component, that component will\\nautomatically be parented to the component in which the loop is in.\\n\\nIn this example, we will create a text for every object in workspace which will be parented to our frame.\\n```lua\\n    local Whiplash = :Import(\\"Whiplash\\");\\n    local New,ForEach = Whiplash.New,Whiplash.ForEach;\\n    New \\"$Frame\\" {\\n        ForEach(workspace:GetChildren()) = function(this,index)\\n            return New \\"$Text\\" {\\n                Text = this.Name;\\n                Name = tostring(index);\\n            }\\n        end;\\n    };\\n```","params":[{"name":"loop","desc":"","lua_type":"{}"}],"returns":[],"function_type":"static","source":{"line":242,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"OnChange","desc":"Listen in on PropertyChanged Signals\\n\\n```lua\\nlocal Whiplash = :Import(\\"Whiplash\\");\\nlocal New,OnChange = Whiplash.New,Whiplash.OnChange;\\n\\nNew \\"$Text\\" {\\n    [OnChange \\"Name\\"] = function(this) --\x3e this/self\\n        print(this,\\" New name is \\", this.Name)\\n    end;\\n}\\n\\n```","params":[{"name":"Event","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":269,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"OnEvent","desc":"Listen in on Events\\n\\n```lua\\nlocal Whiplash = :Import(\\"Whiplash\\");\\nlocal New,OnEvent = Whiplash.New,Whiplash.OnEvent;\\n\\nNew \\"$Button\\" {\\n    [OnEvent \\"MouseButton1Down\\"] = function(this) --\x3e this/self\\n        print(\\"You pressed a button!\\")\\n    end;\\n}\\n\\n```","params":[{"name":"Event","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":292,"path":"src/Core/Libraries/Whiplash.lua"}},{"name":"Children","desc":"Used as a wrapper for children of a Whiplash component. You do not need to use this function \\nbecause any Instance/Pseudo inside of a component will be automatically detected as a children","params":[{"name":"Parent","desc":"","lua_type":"Instance"},{"name":"Value","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","private":true,"source":{"line":305,"path":"src/Core/Libraries/Whiplash.lua"}}],"properties":[],"types":[],"name":"Whiplash","desc":"Library similar to the awesome `Fusion`, But implemented for a more PowerHorseEngine workflow. \\n\\n:::info How you should import\\nWhiplash provides functions which you will read about below, It is recommended that you use these functions as variables\\n\\n```lua\\nlocal New = :Import(\\"Whiplash\\").New;\\n\\nNew \\"$Text\\" {\\n    New \\"$AnotherClass\\" {}\\n}\\n```\\n\\nThan having to reference the entire library when pointer to a function\\n\\n```lua\\nlocal Whiplash = :Import(\\"Whiplash\\");\\n\\nWhiplash.New \\"$Text\\" {\\n    Whiplash.New \\"$AnotherClass\\" {}\\n}\\n```\\n\\n:::","tags":["Library"],"source":{"line":31,"path":"src/Core/Libraries/Whiplash.lua"}}')}}]);