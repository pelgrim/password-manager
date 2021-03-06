/*

Copyright 2008-2011 Clipperz Srl

This file is part of Clipperz Community Edition.
Clipperz Community Edition is an online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz Community Edition is free software: you can redistribute
  it and/or modify it under the terms of the GNU Affero General Public
  License as published by the Free Software Foundation, either version
  3 of the License, or (at your option) any later version.

* Clipperz Community Edition is distributed in the hope that it will
  be useful, but WITHOUT ANY WARRANTY; without even the implied
  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz Community Edition.  If not, see
  <http://www.gnu.org/licenses/>.

*/

//
//	store.js
//	store
//
//	Created by Giulio Cesare Solaroli on 3/7/10
//	Copyright 2010 Clipperz
//	This code was generated by Opacity. You may use or modify it in any way.
//

var kClipperz_PM_UI_Canvas_Features_storeWidth = 76.0;
var kClipperz_PM_UI_Canvas_Features_storeHeight = 76.0;

function Clipperz_PM_UI_Canvas_Features_store(canvas, aColor, aBannerColor, aBannerBackgroundColor)
{
	var context = canvas.getContext("2d");
	var alignStroke;
	var resolution;
	var path;
	var pointX;
	var pointY;
	if (window.devicePixelRatio)
		resolution = window.devicePixelRatio;
	else
		resolution = 1.0;
	resolution *= 0.5 * (canvas.width / kClipperz_PM_UI_Canvas_Features_storeWidth + canvas.height / kClipperz_PM_UI_Canvas_Features_storeHeight);
	
	context.save();
	context.scale(canvas.width / kClipperz_PM_UI_Canvas_Features_storeWidth, canvas.height / kClipperz_PM_UI_Canvas_Features_storeHeight);
	context.clearRect(0.0, 0.0, kClipperz_PM_UI_Canvas_Features_storeWidth, kClipperz_PM_UI_Canvas_Features_storeHeight);
	
	// Layer 1
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 27.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 27.0;
	pointY = 24.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 24.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 27.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 54.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 54.0;
	pointY = 24.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 24.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 54.0;
	pointY = 29.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 43.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 43.0;
	pointY = 32.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 32.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 43.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 27.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 27.0;
	pointY = 32.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 32.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 27.0;
	pointY = 37.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 27.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 27.0;
	pointY = 39.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 39.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 27.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 46.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 46.0;
	pointY = 39.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 39.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 46.0;
	pointY = 44.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 40.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 40.0;
	pointY = 46.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 46.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 29.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 40.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 27.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 27.0;
	pointY = 46.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 46.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 22.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 27.0;
	pointY = 51.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aColor;
	context.fill();
	
	context.restore();
}
