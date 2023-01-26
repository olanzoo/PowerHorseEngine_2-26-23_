"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4167],{62643:e=>{e.exports=JSON.parse('{"functions":[{"name":"useEffect","desc":"If you\'re familiar with `React` then the useEffect is very similar.\\n\\nUses the [useEffect] hook.\\n\\n```lua\\nlocal State1 = .new(\\"State\\");\\nlocal State2 = .new(\\"State\\");\\n\\nState1:useEffect(function()\\n    --\x3e This will run everytime State1.State changes\\n    --\x3e This will also run initially aswell.\\nend)\\n\\nState1:useEffect(function()\\n    --\x3e This will run everytime both State1.State and State2.State changes\\n    --\x3e This will also run initially aswell.\\nend, {State2}) --\x3e State2 is now a dependency of this use Effect\\n\\nState1:useEffect(function()\\n    --\x3e This will not run everytime State1.State changes, but will only run once which will be the initial run. (This is because the dependency list is empty)\\nend, {}) --\x3e Empty Depedency list instead of nil\\n\\nState1:useEffect(function()\\n    local prev = true;\\n    return function() --\x3e Cleanup function, whenever State1.State changes, the previous useEffects cleanup function will be called\\n        prev = false;\\n    end;\\nend)\\n\\nState1:useEffect(function()\\n    return function()\\n        --\x3e This cleanup function will only run when the State is destroyed or the useEffect Servant. (This is because the dependency list is empty)\\n    end;\\nend, {}) --\x3e Empty Depedency list instead of nil\\n```","params":[{"name":"callback","desc":"Depedencies that will trigger the useEffect","lua_type":"table"},{"name":"dependencies","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"Servant"}],"function_type":"method","source":{"line":96,"path":"src/Pseudo/Core/Classes/States/State.lua"}}],"properties":[{"name":"State","desc":"Calling the State as a function also returns the State value. This is the preferred way.\\n```lua\\nprint(State.State) == print(State())\\n```","lua_type":"any","source":{"line":53,"path":"src/Pseudo/Core/Classes/States/State.lua"}}],"types":[],"name":"State","desc":"It is recommended that you use the built in [State](StateLibrary) library when working with `State`\\n\\n:::warning\\nPrinting a State will print out the State.State, But be aware that you cannot compare States with premitives. \\n\\n```lua\\nlocal State = .new(\\"State\\");\\nState.State = 1;\\nprint(State) --\x3e 1\\nprint(State == 1) --\x3e false\\n```\\nThis is because the State is Pseudo, not the actually value `1`. Instead use State.State or State()\\n```lua\\nlocal State = .new(\\"State\\");\\nState.State = 1;\\nprint(State) --\x3e 1\\nprint(State() == 1) --\x3e true\\n```\\n\\nComparing States with other Pseudo\'s may work but you should refrain from doing so if not needed.\\n```lua\\nlocal State = .new(\\"State\\");\\nState.State = 1;\\nlocal State2 = .new(\\"State\\");\\nState2.State = 1;\\nprint(State() == State2()) --\x3e true | recommeded\\nprint(State == State2) --\x3e true | not recommeded\\n```\\n:::","source":{"line":38,"path":"src/Pseudo/Core/Classes/States/State.lua"}}')}}]);