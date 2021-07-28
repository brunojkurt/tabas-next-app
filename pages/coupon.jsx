import { useState, useRef } from 'react'
import { DefaultLayout } from 'components/UI/layouts'
import { Container, Button, Typography, List, ListItem, ListItemText } from 'components/UI/elements'
import { CouponWrapper, CouponCodeField, ApplyBtn } from 'styles/pages/coupon'
import { useI18n } from 'hooks/i18n'

const Coupon = () => {
  const { t } = useI18n()
  const couponInputRef = useRef(null)
  const [paymentInfo, setPaymentInfo] = useState({
    breakdown: [
      {
        rent: 5499,
        cleaning: 50
      },
      {
        rent: 5499,
        cleaning: 50
      },
      {
        rent: 5499,
        cleaning: 50
      }
    ],
    discount: null
  })
  const [couponState, setCouponState] = useState({
    applied: false,
    error: false
  })

  const onCouponInput = () => {
    if (couponState.error) {
      setCouponState({ applied: false, error: false })
    }
  }

  const handleCouponApply = () => {
    setCouponState(() => {
      if (couponInputRef.current.value === 'VALIDCODE') {
        setPaymentInfo(state => ({ ...state, discount: 10 }))
        return { applied: true, error: false }
      }
      return { applied: false, error: true }
    })
  }

  const handleCouponRemove = () => {
    couponInputRef.current.value = ''
    setCouponState({ applied: false, error: false })
    setPaymentInfo(state => ({ ...state, discount: null }))
  }

  const discountedValue = (value) => {
    return paymentInfo.discount ? (value * paymentInfo.discount) / 100 : value
  }

  return (
    <DefaultLayout>
      <Container>
        <CouponWrapper>
          <CouponCodeField
            inputRef={couponInputRef}
            placeholder="CODE"
            size="medium"
            variant="outlined"
            onChange={onCouponInput}
            valid={couponState.applied}
            error={couponState.error}
            inputProps={{
              readOnly: couponState.applied
            }}
          />
          <ApplyBtn
            color="primary"
            variant="contained"
            onClick={() => handleCouponApply()}
            disabled={couponState.applied}
          >
            {t('pages.coupon.apply')}
          </ApplyBtn>
          <Button
            color="primary"
            onClick={() => handleCouponRemove()}
            disabled={!couponState.applied}
          >
            {t('pages.coupon.remove')}
          </Button>
        </CouponWrapper>
      </Container>
      <Container>
      <Typography variant="h6">
        Breakdown
      </Typography>
      <List>
        {paymentInfo.breakdown.map((tax, index) => (
          <ListItem key={index} button>
              <ListItemText>
                {`${t('pages.coupon.rent')} - ${discountedValue(tax.rent)}`}
              </ListItemText>
              <ListItemText>
                {`${t('pages.coupon.cleaning')} - ${tax.cleaning}`}
              </ListItemText>
          </ListItem>
        ))}
      </List>
      </Container>
    </DefaultLayout>
  )
}

export default Coupon
