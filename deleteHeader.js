/***********************************************
> deleteHeader by DangTrungHieu
***********************************************/

const version = 'V1.0.3';

function deleteHeaderValue(e, a) {
  var r = a.toLowerCase();
  if (r in e) delete e[r];
  if (a in e) delete e[a];
}

var modifiedHeaders = $request.headers;
deleteHeaderValue(modifiedHeaders, "X-RevenueCat-ETag");
deleteHeaderValue(modifiedHeaders, "If-None-Match");

$done({ headers: modifiedHeaders });

