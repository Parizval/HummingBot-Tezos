/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/ban-types */
import { Router, Request, Response } from 'express';
import { asyncHandler } from '../services/error-handler';
// import {
//   approve,
//   allowances,
//   nonce,
//   // nextNonce,
// } from '../chains/tezos/tezos.controllers';

import {
  validateAllowancesRequest,
  validateApproveRequest,
  validateNonceRequest,
} from '../chains/tezos/tezos.validators';
// import { getChain } from '../services/connection-manager';
import {
  AllowancesRequest,
  AllowancesResponse,
  ApproveRequest,
  ApproveResponse,
  NonceRequest,
  NonceResponse,
} from './tezos.request';

export namespace TezosRoutes {
  export const router = Router();

  router.post(
    '/nextNonce',
    asyncHandler(
      async (
        req: Request<{}, {}, NonceRequest>,
        res: Response<NonceResponse | string, {}>
      ) => {
        validateNonceRequest(req.body);
        //          const chain = await getChain(req.body.chain, req.body.network);
        res.status(404).json();
        //        res.status(200).json(await nextNonce(chain, req.body));
      }
    )
  );

  router.post(
    '/nonce',
    asyncHandler(
      async (
        req: Request<{}, {}, NonceRequest>,
        res: Response<NonceResponse | string, {}>
      ) => {
        validateNonceRequest(req.body);
        //          const chain = await getChain(req.body.chain, req.body.network);
        res.status(404).json();
        //        res.status(200).json(await nonce(chain, req.body));
      }
    )
  );

  router.post(
    '/allowances',
    asyncHandler(
      async (
        req: Request<{}, {}, AllowancesRequest>,
        res: Response<AllowancesResponse | string, {}>
      ) => {
        validateAllowancesRequest(req.body);
        //        const chain = await getChain(req.body.chain, req.body.network);
        //        res.status(200).json(await allowances(chain, req.body));
        res.status(404).json();
      }
    )
  );

  router.post(
    '/approve',
    asyncHandler(
      async (
        req: Request<{}, {}, ApproveRequest>,
        res: Response<ApproveResponse | string, {}>
      ) => {
        validateApproveRequest(req.body);
        //        const chain = await getChain(req.body.chain, req.body.network);
        //        res.status(200).json(await approve(chain, req.body));
        res.status(404).json();
      }
    )
  );
}
