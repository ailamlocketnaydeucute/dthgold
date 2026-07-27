/***********************************************
> deleteHeader by DangTrungHieu
***********************************************/

var modifiedHeaders = $request.headers;

if (modifiedHeaders) {
  delete modifiedHeaders['X-RevenueCat-ETag'];
  delete modifiedHeaders['x-revenuecat-etag'];
  delete modifiedHeaders['If-None-Match'];
  delete modifiedHeaders['if-none-match'];
}

$done({ headers: modifiedHeaders });
