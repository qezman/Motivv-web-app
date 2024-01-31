
import React from "react"
import useScript from "./useScript"

const callPaystackPop = function (paystackArgs) {
  const handler = window.PaystackPop && window.PaystackPop.setup(paystackArgs)
  handler && handler.openIframe()
}

function usePaystackPayment(options) {
  const [loading, error] = useScript({
    src: "https://js.paystack.co/v1/inline.js",
    checkForExisting: true,
  })
  const { key } = options
  const { email } = options
  const { amount } = options
  const { reference } = options
  const _b = options.metadata
  const metadata = _b === undefined ? {} : _b
  const _c = options.currency
  const currency = _c === undefined ? "NGN" : _c
  const { channels } = options
  const _d = options.label
  const label = _d === undefined ? "" : _d
  const _e = options.plan
  const plan = _e === undefined ? "" : _e
  const _f = options.quantity
  const quantity = _f === undefined ? "" : _f
  const _g = options.subaccount
  const subaccount = _g === undefined ? "" : _g
  const _h = options.transaction_charge
  const transaction_charge = _h === undefined ? 0 : _h
  const _j = options.bearer
  const bearer = _j === undefined ? "account" : _j
  function initializePayment(callback, onClose) {
    if (error) {
      throw new Error("Unable to load paystack inline script")
    }
    if (!loading) {
      const paystackArgs = {
        callback:
          callback ||
          function () {
            return null
          },
        onClose:
          onClose ||
          function () {
            return null
          },
        key,
        ref: reference,
        email,
        amount,
        currency,
        plan,
        quantity,
        "data-custom-button": options["data-custom-button"] || "",
        channels,
        subaccount,
        transaction_charge,
        bearer,
        label,
        metadata,
      }
      callPaystackPop(paystackArgs)
    }
  }
  React.useEffect(() => {
    if (error) {
      throw new Error("Unable to load paystack inline script")
    }
  }, [error])
  return initializePayment
}

export default usePaystackPayment
