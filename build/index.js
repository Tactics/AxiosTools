import { AxiosError, AxiosHeaders } from 'axios';

var p=async s=>{let e=s.params.namespace||!1,o=e?"X-"+e:"X-",a=s.params.deviceId||"unknown",r=s.params.deviceName||"unknown";return s.headers.set(o+"Device-Id",a).set(o+"Device-Name",r),s};var l=async s=>{let e=s.params.namespace||!1,o=e?"X-"+e:"X-",a=window.location.host.split(":")[0];return s.headers.set(o+"Domain",a),s};var A=async s=>{let e=s.params.language||"en";return s.headers.set("Accept-Language",e),s};var u=async s=>(s.headers.set("Content-Type","application/json").set("Accept","application/json"),s);var R=async s=>{let e=s.params.access_token||!1;return e&&s.headers.set("Authorization","Bearer "+e),s};var t=class{get(e){return this.mock_call(e)}post(e){return this.mock_call(e)}patch(e){return this.mock_call(e)}put(e){return this.mock_call(e)}delete(e){return this.mock_call(e)}mock_call({success:e,failure:o,failure_code:a,time:r=800,successRate:n=.9,response_headers:i,request_headers:c=new AxiosHeaders}){return new Promise((x,m)=>{setTimeout(()=>{if(Math.random()<n||n==1)x({data:e,status:200,statusText:"OK",headers:i??{},config:{headers:c},request:{}});else {let d={response:{data:o,status:a,statusText:"Error",headers:i??{},config:{},request:{}},isAxiosError:!0,toJSON:()=>({})};m(AxiosError.from(d));}},r);})}};

export { t as AxiosMock, R as addAccessTokenHeader, p as addDeviceHeader, l as addDomainHeader, u as addJsonHeaders, A as addLanguageHeader };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvcy9pbnRlcmNlcHRvcnMvcmVxdWVzdC9oZWFkZXJzL2N1c3RvbS9kZXZpY2UudHMiLCIuLi9zcmMvYXhpb3MvaW50ZXJjZXB0b3JzL3JlcXVlc3QvaGVhZGVycy9jdXN0b20vZG9tYWluLnRzIiwiLi4vc3JjL2F4aW9zL2ludGVyY2VwdG9ycy9yZXF1ZXN0L2hlYWRlcnMvbGFuZ3VhZ2UudHMiLCIuLi9zcmMvYXhpb3MvaW50ZXJjZXB0b3JzL3JlcXVlc3QvaGVhZGVycy9qc29uLnRzIiwiLi4vc3JjL2F4aW9zL2ludGVyY2VwdG9ycy9yZXF1ZXN0L2hlYWRlcnMvYXV0aG9yaXphdGlvbi50cyIsIi4uL3NyYy9heGlvcy9tb2Nrcy9tb2NrLnRzIl0sIm5hbWVzIjpbImFkZERldmljZUhlYWRlciIsImNvbmZpZyIsIm5hbWVzcGFjZSIsImhlYWRlclByZWZpeCIsImRldmljZUlkIiwiZGV2aWNlTmFtZSIsImFkZERvbWFpbkhlYWRlciIsImRvbWFpbiIsImFkZExhbmd1YWdlSGVhZGVyIiwibGFuZ3VhZ2UiLCJhZGRKc29uSGVhZGVycyIsImFkZEFjY2Vzc1Rva2VuSGVhZGVyIiwiYWNjZXNzX3Rva2VuIiwiQXhpb3NFcnJvciIsIkF4aW9zSGVhZGVycyIsIkF4aW9zTW9jayIsInByb3BzIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmYWlsdXJlX2NvZGUiLCJ0aW1lIiwic3VjY2Vzc1JhdGUiLCJyZXNwb25zZV9oZWFkZXJzIiwicmVxdWVzdF9oZWFkZXJzIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yUmVzcG9uc2UiXSwibWFwcGluZ3MiOiJBQUVPLElBQU1BLEVBQWtCLE1BQzdCQyxHQUN3QyxDQUN4QyxJQUFNQyxFQUFZRCxFQUFPLE9BQU8sV0FBYSxHQUN2Q0UsRUFBZUQsRUFBWSxLQUFPQSxFQUFZLEtBRTlDRSxFQUFXSCxFQUFPLE9BQU8sVUFBWSxVQUNyQ0ksRUFBYUosRUFBTyxPQUFPLFlBQWMsVUFFL0MsT0FBQ0EsRUFBTyxRQUNMLElBQUlFLEVBQWUsWUFBYUMsQ0FBUSxFQUN4QyxJQUFJRCxFQUFlLGNBQWVFLENBQVUsRUFDeENKLENBQ1QsRUNiTyxJQUFNSyxFQUFrQixNQUM3QkwsR0FDd0MsQ0FDeEMsSUFBTUMsRUFBWUQsRUFBTyxPQUFPLFdBQWEsR0FDdkNFLEVBQWVELEVBQVksS0FBT0EsRUFBWSxLQUU5Q0ssRUFBUyxPQUFPLFNBQVMsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBRWhELE9BQUNOLEVBQU8sUUFBeUIsSUFBSUUsRUFBZSxTQUFVSSxDQUFNLEVBQzdETixDQUNULEVDVk8sSUFBTU8sRUFBb0IsTUFDL0JQLEdBQ3dDLENBQ3hDLElBQU1RLEVBQVdSLEVBQU8sT0FBTyxVQUFZLEtBQzNDLE9BQUNBLEVBQU8sUUFBeUIsSUFBSSxrQkFBbUJRLENBQVEsRUFDekRSLENBQ1QsRUNOTyxJQUFNUyxFQUFpQixNQUM1QlQsSUFFQ0EsRUFBTyxRQUNMLElBQUksZUFBZ0Isa0JBQWtCLEVBQ3RDLElBQUksU0FBVSxrQkFBa0IsRUFDNUJBLEdDTkYsSUFBTVUsRUFBdUIsTUFDbENWLEdBQ3dDLENBQ3hDLElBQU1XLEVBQWVYLEVBQU8sT0FBTyxjQUFnQixHQUNuRCxPQUFJVyxHQUNEWCxFQUFPLFFBQXlCLElBQy9CLGdCQUNBLFVBQVlXLENBQ2QsRUFFS1gsQ0FDVCxFQ2JBLE9BQ0UsY0FBQVksRUFDQSxnQkFBQUMsTUFLSyxRQVlBLElBQU1DLEVBQU4sS0FBeUIsQ0FDOUIsSUFBSUMsRUFBa0QsQ0FDcEQsT0FBTyxLQUFLLFVBQVVBLENBQUssQ0FDN0IsQ0FFQSxLQUFLQSxFQUFrRCxDQUNyRCxPQUFPLEtBQUssVUFBVUEsQ0FBSyxDQUM3QixDQUVBLE1BQU1BLEVBQWtELENBQ3RELE9BQU8sS0FBSyxVQUFVQSxDQUFLLENBQzdCLENBRUEsSUFBSUEsRUFBa0QsQ0FDcEQsT0FBTyxLQUFLLFVBQVVBLENBQUssQ0FDN0IsQ0FFQSxPQUFPQSxFQUFrRCxDQUN2RCxPQUFPLEtBQUssVUFBVUEsQ0FBSyxDQUM3QixDQUVRLFVBQVUsQ0FDaEIsUUFBQUMsRUFDQSxRQUFBQyxFQUNBLGFBQUFDLEVBQ0EsS0FBQUMsRUFBTyxJQUNQLFlBQUFDLEVBQWMsR0FDZCxpQkFBQUMsRUFDQSxnQkFBQUMsRUFBa0IsSUFBSVQsQ0FDeEIsRUFBOEMsQ0FDNUMsT0FBTyxJQUFJLFFBQTBCLENBQUNVLEVBQVNDLElBQVcsQ0FDeEQsV0FBVyxJQUFNLENBRWYsR0FBSSxLQUFLLE9BQU8sRUFBSUosR0FBZUEsR0FBZSxFQVloREcsRUFYMEMsQ0FDeEMsS0FBTVAsRUFDTixPQUFRLElBQ1IsV0FBWSxLQUNaLFFBQVNLLEdBQW9CLENBQUMsRUFDOUIsT0FBUSxDQUNOLFFBQVNDLENBQ1gsRUFDQSxRQUFTLENBQUMsQ0FDWixDQUV1QixNQUNsQixDQUNMLElBQU1HLEVBQWdCLENBQ3BCLFNBQVUsQ0FDUixLQUFNUixFQUNOLE9BQVFDLEVBQ1IsV0FBWSxRQUNaLFFBQVNHLEdBQW9CLENBQUMsRUFDOUIsT0FBUSxDQUFDLEVBQ1QsUUFBUyxDQUFDLENBQ1osRUFDQSxhQUFjLEdBQ2QsT0FBUSxLQUFPLENBQUMsRUFDbEIsRUFFQUcsRUFBT1osRUFBVyxLQUFLYSxDQUFhLENBQUMsQ0FDdkMsQ0FDRixFQUFHTixDQUFJLENBQ1QsQ0FBQyxDQUNILENBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0hlYWRlcnMsIEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhZGREZXZpY2VIZWFkZXIgPSBhc3luYyAoXG4gIGNvbmZpZzogSW50ZXJuYWxBeGlvc1JlcXVlc3RDb25maWcsXG4pOiBQcm9taXNlPEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnPiA9PiB7XG4gIGNvbnN0IG5hbWVzcGFjZSA9IGNvbmZpZy5wYXJhbXMubmFtZXNwYWNlIHx8IGZhbHNlO1xuICBjb25zdCBoZWFkZXJQcmVmaXggPSBuYW1lc3BhY2UgPyBcIlgtXCIgKyBuYW1lc3BhY2UgOiBcIlgtXCI7XG5cbiAgY29uc3QgZGV2aWNlSWQgPSBjb25maWcucGFyYW1zLmRldmljZUlkIHx8IFwidW5rbm93blwiO1xuICBjb25zdCBkZXZpY2VOYW1lID0gY29uZmlnLnBhcmFtcy5kZXZpY2VOYW1lIHx8IFwidW5rbm93blwiO1xuXG4gIChjb25maWcuaGVhZGVycyBhcyBBeGlvc0hlYWRlcnMpXG4gICAgLnNldChoZWFkZXJQcmVmaXggKyBcIkRldmljZS1JZFwiLCBkZXZpY2VJZClcbiAgICAuc2V0KGhlYWRlclByZWZpeCArIFwiRGV2aWNlLU5hbWVcIiwgZGV2aWNlTmFtZSk7XG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiaW1wb3J0IHsgQXhpb3NIZWFkZXJzLCBJbnRlcm5hbEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYWRkRG9tYWluSGVhZGVyID0gYXN5bmMgKFxuICBjb25maWc6IEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnLFxuKTogUHJvbWlzZTxJbnRlcm5hbEF4aW9zUmVxdWVzdENvbmZpZz4gPT4ge1xuICBjb25zdCBuYW1lc3BhY2UgPSBjb25maWcucGFyYW1zLm5hbWVzcGFjZSB8fCBmYWxzZTtcbiAgY29uc3QgaGVhZGVyUHJlZml4ID0gbmFtZXNwYWNlID8gXCJYLVwiICsgbmFtZXNwYWNlIDogXCJYLVwiO1xuXG4gIGNvbnN0IGRvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnNwbGl0KFwiOlwiKVswXTtcblxuICAoY29uZmlnLmhlYWRlcnMgYXMgQXhpb3NIZWFkZXJzKS5zZXQoaGVhZGVyUHJlZml4ICsgXCJEb21haW5cIiwgZG9tYWluKTtcbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCJpbXBvcnQgeyBBeGlvc0hlYWRlcnMsIEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRMYW5ndWFnZUhlYWRlciA9IGFzeW5jIChcbiAgY29uZmlnOiBJbnRlcm5hbEF4aW9zUmVxdWVzdENvbmZpZyxcbik6IFByb21pc2U8SW50ZXJuYWxBeGlvc1JlcXVlc3RDb25maWc+ID0+IHtcbiAgY29uc3QgbGFuZ3VhZ2UgPSBjb25maWcucGFyYW1zLmxhbmd1YWdlIHx8IFwiZW5cIjtcbiAgKGNvbmZpZy5oZWFkZXJzIGFzIEF4aW9zSGVhZGVycykuc2V0KFwiQWNjZXB0LUxhbmd1YWdlXCIsIGxhbmd1YWdlKTtcbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCJpbXBvcnQgeyBBeGlvc0hlYWRlcnMsIEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRKc29uSGVhZGVycyA9IGFzeW5jIChcbiAgY29uZmlnOiBJbnRlcm5hbEF4aW9zUmVxdWVzdENvbmZpZyxcbik6IFByb21pc2U8SW50ZXJuYWxBeGlvc1JlcXVlc3RDb25maWc+ID0+IHtcbiAgKGNvbmZpZy5oZWFkZXJzIGFzIEF4aW9zSGVhZGVycylcbiAgICAuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxuICAgIC5zZXQoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7IEF4aW9zSGVhZGVycywgSW50ZXJuYWxBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGFkZEFjY2Vzc1Rva2VuSGVhZGVyID0gYXN5bmMgKFxuICBjb25maWc6IEludGVybmFsQXhpb3NSZXF1ZXN0Q29uZmlnLFxuKTogUHJvbWlzZTxJbnRlcm5hbEF4aW9zUmVxdWVzdENvbmZpZz4gPT4ge1xuICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBjb25maWcucGFyYW1zLmFjY2Vzc190b2tlbiB8fCBmYWxzZTtcbiAgaWYgKGFjY2Vzc190b2tlbikge1xuICAgIChjb25maWcuaGVhZGVycyBhcyBBeGlvc0hlYWRlcnMpLnNldChcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiLFxuICAgICAgXCJCZWFyZXIgXCIgKyBhY2Nlc3NfdG9rZW4sXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7XG4gIEF4aW9zRXJyb3IsXG4gIEF4aW9zSGVhZGVycyxcbiAgQXhpb3NSZXF1ZXN0SGVhZGVycyxcbiAgQXhpb3NSZXNwb25zZSxcbiAgQXhpb3NSZXNwb25zZUhlYWRlcnMsXG4gIFJhd0F4aW9zUmVzcG9uc2VIZWFkZXJzLFxufSBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBeGlvc01vY2tDYWxsSSB7XG4gIHN1Y2Nlc3M6IGFueTtcbiAgcmVzcG9uc2VfaGVhZGVycz86IFJhd0F4aW9zUmVzcG9uc2VIZWFkZXJzIHwgQXhpb3NSZXNwb25zZUhlYWRlcnM7XG4gIHJlcXVlc3RfaGVhZGVycz86IEF4aW9zUmVxdWVzdEhlYWRlcnM7XG4gIGZhaWx1cmU6IGFueTtcbiAgZmFpbHVyZV9jb2RlOiBzdHJpbmc7XG4gIHRpbWU/OiBudW1iZXI7XG4gIHN1Y2Nlc3NSYXRlPzogMCB8IDAuMSB8IDAuMiB8IDAuMyB8IDAuNCB8IDAuNSB8IDAuNiB8IDAuNyB8IDAuOCB8IDAuOSB8IDE7XG59XG5cbmV4cG9ydCBjbGFzcyBBeGlvc01vY2s8VCA9IGFueT4ge1xuICBnZXQocHJvcHM6IEF4aW9zTW9ja0NhbGxJKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubW9ja19jYWxsKHByb3BzKTtcbiAgfVxuXG4gIHBvc3QocHJvcHM6IEF4aW9zTW9ja0NhbGxJKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubW9ja19jYWxsKHByb3BzKTtcbiAgfVxuXG4gIHBhdGNoKHByb3BzOiBBeGlvc01vY2tDYWxsSSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLm1vY2tfY2FsbChwcm9wcyk7XG4gIH1cblxuICBwdXQocHJvcHM6IEF4aW9zTW9ja0NhbGxJKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubW9ja19jYWxsKHByb3BzKTtcbiAgfVxuXG4gIGRlbGV0ZShwcm9wczogQXhpb3NNb2NrQ2FsbEkpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5tb2NrX2NhbGwocHJvcHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb2NrX2NhbGwoe1xuICAgIHN1Y2Nlc3MsXG4gICAgZmFpbHVyZSxcbiAgICBmYWlsdXJlX2NvZGUsXG4gICAgdGltZSA9IDgwMCxcbiAgICBzdWNjZXNzUmF0ZSA9IDAuOSxcbiAgICByZXNwb25zZV9oZWFkZXJzLFxuICAgIHJlcXVlc3RfaGVhZGVycyA9IG5ldyBBeGlvc0hlYWRlcnMoKSxcbiAgfTogQXhpb3NNb2NrQ2FsbEkpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXhpb3NSZXNwb25zZTxUPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNpbXVsYXRlIGEgc3VjY2Vzc2Z1bCBBUEkgY2FsbCB3aXRoIGEgc3BlY2lmaWVkIHN1Y2Nlc3MgcmF0ZVxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHN1Y2Nlc3NSYXRlIHx8IHN1Y2Nlc3NSYXRlID09IDEpIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzUmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VD4gPSB7XG4gICAgICAgICAgICBkYXRhOiBzdWNjZXNzLFxuICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZV9oZWFkZXJzID8/IHt9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcXVlc3RfaGVhZGVycyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1ZXN0OiB7fSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVzb2x2ZShzdWNjZXNzUmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgICBkYXRhOiBmYWlsdXJlLFxuICAgICAgICAgICAgICBzdGF0dXM6IGZhaWx1cmVfY29kZSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogXCJFcnJvclwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZV9oZWFkZXJzID8/IHt9LFxuICAgICAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgICAgICByZXF1ZXN0OiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0F4aW9zRXJyb3I6IHRydWUsXG4gICAgICAgICAgICB0b0pTT046ICgpID0+ICh7fSksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlamVjdChBeGlvc0Vycm9yLmZyb20oZXJyb3JSZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgICB9LCB0aW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIl19