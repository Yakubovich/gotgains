(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(2),i=a.n(r),h=(a(14),a(3)),o=a(4),u=a(6),l=a(5),c=a(7);a(15);function g(t){for(var e=[45,25,10,5,2.5],a=function(t){for(var e=t[0],a=1;a<t.length;a++)t[a]<e&&(e=t[a]);return e}(e),s=[],r=t.totalWeight-45,i=0;r>=2*a;){var h=e[i];r>=2*h?(s.push(h),r-=2*h):i++}return n.a.createElement("div",{className:"weighted-bar"},n.a.createElement("div",{className:"bar"}),s.reverse().map(function(t,e){return n.a.createElement("div",{className:"plate",weight:t,key:"left"+e},t)}),n.a.createElement("div",{className:"gap"}),s.reverse().map(function(t,e){return n.a.createElement("div",{className:"plate",weight:t,key:"right"+e},t)}))}var m=function(t){function e(t){var a;Object(h.a)(this,e);var s=[{weight:0,reps:5},{weight:.6,reps:5},{weight:.7,reps:5},{weight:.8,reps:1}];(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={totalWeight:145,stage:-1,warmups:a.howManyWarmups(s),stages:s};for(var n=0;n<3;n++)a.state.stages.push({weight:1,reps:5});return a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"howManyWarmups",value:function(t){for(var e=0;e<t.length;e++)if(1==t[e].weight)return e;return t.length}},{key:"nextStage",value:function(){this.state.stage<this.state.stages.length-1?this.setState({stage:this.state.stage+1}):this.setState({stage:-1})}},{key:"stageDetails",value:function(){var t=this.state.stages[this.state.stage].weight,e=this.state.stages[this.state.stage].reps;return{weight:t=t>0?t*this.state.totalWeight:45,reps:e}}},{key:"instructions",value:function(){var t=this.state.stages[this.state.stage].weight,e=this.state.stages[this.state.stage].reps;return["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][e-1]+(1==e?" rep":" reps")+" "+(0==t?"with an empty bar":1==t?"with full weight":"with "+100*t+" percent weight")}},{key:"buttonText",value:function(){var t=this.state.stage;return-1==t?"Start Warmup":t==this.state.warmups-1?"Start First Set":t<this.state.warmups-1?"Next Warmup Set":t<this.state.stages.length-1?"Next Set":"Done"}},{key:"headerText",value:function(){var t=this.state.stage;return-1==t?"Warmup":t==this.state.warmups?"First Set":t<this.state.warmups?"Warmup":this.areWeDone()?"Last Set":["first","second","third","4th","5th","6th","7th","8th","9th"][t-this.state.warmups]+" Set"}},{key:"areWeDone",value:function(){return this.state.stage==this.state.stages.length-1}},{key:"areWeStarted",value:function(){return this.state.stage>-1}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-container"},this.areWeStarted()?n.a.createElement("div",null,n.a.createElement("h1",null,this.headerText()),this.instructions(),n.a.createElement(g,{totalWeight:this.stageDetails().weight})):n.a.createElement("div",null,n.a.createElement("input",{type:"text",value:this.state.totalWeight,onChange:function(e){return t.setState({totalWeight:e.target.value})}}),n.a.createElement("span",{className:"lbs"}," lbs")),n.a.createElement("button",{onClick:this.nextStage.bind(this)},this.buttonText())))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.776e122d.chunk.js.map