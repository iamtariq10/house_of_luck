/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAADfEUlEQVR42rS9ZZhc17EFWrUPNfcwSwOSRsxgoZk5tsOO4+TGDscO3DCDw7m5YXCcxHHITLFjtmxZFrM0gtFomKcZDu1d78fp7unu6Rkp973Xn79k1Higdu2qVatWodzaBKUeiAjTP2Z4Nf8lRCQiBCTmPCGcV4mIkAEAIjkvEFHxpxBn+CFEFAgAwGjyPaLwvfnfWfLY8v+Y+ub/Dx+5L8+dV9GD0Vk+9Z++WnzilP0dIpzydsLM95R+dZpjnvlSy//nK4WIBIAzGpzzewTOGyn3DGYNarp7P51VZW1u8p94tjM86yL5/9Wk4ByuDwA4/5//6lmPyrkU/5cD+M8/NZ1tzXAAcsnjO6uFZr0OUPbNrMDGnL8psxgp83fOSwmizKv/iUfMWRsiAZAELPcdAgvOcwY/l3+ZGCJNf21o8iNU9C1AlHtu0l8C5fmGEt636CblPy8yX5fnthkSESPHx+PUGzn1ZGe4zY5PQhIAAIyVfCdzjh2RsqeHNHkKJW1rGmePACBnfE/ex87JtWbN8VxMEPD/rVOZsoVRsYlnDA7P5Ztzz9hAgCAVu93MLc8YCkL+fc18Nm/dF13xoms9s0suMo6ifyIiwkzxQNGXn7sPm/pzeXcz3xgy6+dc7nLRr8ul3sGKVk/J5Z65jVTowHFytU8eXNZXzXyepY4+/zmRWVfZ/52MqKY/b8y3CwAEFCw/8qA8bzH5G4CTp8+zCy93M5lzETHftxEiOp/IfBtC5hnMrHvCPBMUVLQsp1ulRM5lzpx70c07R4Mr7bcya4Y53ijfASBgzqAISkRdBTtSnkvL9/XyZCQ0U4w27SvFixWnWrHzPJ7VUeVf3Jw95L0B80+eiKBUJF50h5w/BOauNeW79/ytaurqLz6RXJw4Y7SU7/4JCAGzgeake5u6OfynzmY6MzrrtnMuMZZzH0t/wzQfn3r88lk3tSmXOM+fsUlrRprcknLZHwABkwQRggCgrL8pnZeV+pvyPsUKwiPGBBBMYxDORoZ5OWf+qs83qaJFJeV9lSg6yKKl6nxJ7p2565LxgkCUTYXZlF/Mzz6ohLuaXOQSCqJMNoeTx8WITb1xuXOZPvphmWsz+X6B6FyeyajSuZsIuWtYFMxh7ompfmvSsP6DUGmqkU75xmwEgmeNBmY2qdJRc1EgNX3wRESQ3XqmLuiSv37WWKTwy7FU9Jj3kcKMdbr4l4jyY4mp8W7J8H86PzE1Vp7ZEeZeZQyJAKcJ2op/GksGSsXHI5d6+1TXijNHRY5d5/K1InSk0APl7eUz+chJD5fdPigvxiqxJeWF25ixyryNHxGLvBE6+3RRdFVqPZS4N9lnxJTvhHxfdQ5bGCFMugSGmahs+n0ZBQMEgZN+66yrtwDlIQInNydBRIgSEREJRKRsNDiZDxIiIGViMiw8f5ou3nJ+Tj73TbAwRCgKy0qk0NnzwXOHEkq+ylhBMkFAIpvw5+w7u8UUuc+zwFcIJeKt//fY6TliRVO/fCosPENSSdPHOjNchMmXpri67FqjcwHMzhoUyvm52/S5IU3ikWxyhTFnu0UioMLNgeWtZ3FW7LuUP2MlcJZszpKP2WdWPJbIBItOSZTIkrAog50uJP+PEcVpvofNCK1RYXKVgxvyDyNbb2AAIBgQEaOpnh5LxgBZ30OT+TvxPEud2YyKt0PMBPil7Vv+T3PAglCOnEwbirLBPMB9Zm9EhakfFcVSU89QMADIbHkZ/AlL57N0zmeV71TPWkr6v9nc5LfNkKxNAXRyEdhZ3UP+FSjCos56nHm+LS/wOFeQDKcDukviWFCUI+Q9n0U1mPOPyd03i5FA3vPTYlSIuZ2b8pBlVrQLiCngBWbOPB8zK20ENE2AX6IceQ67f9HNO5fyWcnwmfIs7FygnVwElo0IMws7r07KnOg2+yuZvSKHURXlH0XPUH6yRSLnh6gwcJpiW/lXN998sQDHOpdlnYur8rKeklnR2WHPHFI13fZfElXK7RJT0bIZMtZpjekc3MC5J7DTPbLRYSknl/cVM2BOkwg+OMuMGBS4k+mw+5KYdtEfZzn9Us7o3PE2ueQ1LOXDplYw0MkmMjcsH3cuFUhmA/8c7lMQS2H2MZnP564CgsgG5jBjiVHAtO85a1BcGBcDIjLgRRFeFrEWGd9MJLJetjA6OkualsO6ivYIJJoJ78hf1Xm4aykbZ4VXxXkXznxrpi5jxpztmE0DkeZ9hIm8d2IRQAoz+arCQKqkN3LysumSl9zyRSztD/JPVWBe5HU2pK3kgjhHYk/+AsVJn3+WGnlmPWM2ystFs+cWjU1n32d9Pi+fxRxxKBNxipn8VsmNt8AjEk29v6XC9nMN8OVpwtmc6WNuj89fIJi33qbDvqePhVl+ZWPyamZRnFxITueCGhTuejNs5TjF8grzVYGFwHuYmlNOumpnY3J2i2xxMG9ls1J5aD6+RXkOvMiHsbPtOIgo8qN1kZ8tZhbGlI8XY1EMkERBvCUKGQ0zb5p5TzpXrRhDkGeIQ/Ox9XwwrMjDzVAWLWIclASK8sIIQETOCrKns2JsojghKp3fIU5bBs8LSIloRmrhdMXdvIwvA7FhXhyad3j5i5qm8VUlCzUzOEI2pTyQO4spaFbxr5SMz4oTDqBzhLIKkPdS2HpeMZgKAuFsHXDayjnLVu8xmzmWqrxhvsEhImWiLudr2AwIZ8lnStWCSgTdIt9DEctlryxznCxTCDo3SJOmuMNcoRFzUUHeBkTAMzBgIWI9dWXm513sbFF5ztNkyraT5VqYijhkPRkrWWbOhFbo1M7zX6BJFAUrg5EQcI5zqIapXx2WGW6ADH/oiDmwPepe/Ykx2HabfxoJW1rxk/yor2RZkSYSpW5CiscJUEj5AUhXF6qdVbua8k6YOnTz7uY3FneYtqvygdCAf9zTA4LqinosAGEmMq9lqc65hJOGGdyxYTgYKSTG3PBruNsIIwIECkLWxCAlLGqXHW9lI8smTmLwlpvDgHL37hZJo7JB+XF1KuU2zgQ857BbBSSw8yySzbzlZm6ZO4uTR5LFp8rjbQLEHmeihVskU7CnF/hdpKIUlveFMPP5I1O4EZMoJgBr4HJBeyQgGl6WLk4kcyDvzLuDCRkBKJoGcgzwDZ5vKKZwsmSlMjS4TMW26VAAIb5EdXMZL+pqYDzEYZAhTFEhsKM+c5sugqaoNwmDhKRyOxmCIA5CBinHiHmpzVAzqZU6LahVGmF8o+kCDRnWfOfmVw6JR7KwXJIRMQAAaf6rRKGApOllHNkEZcshJbgY2WSimKswilsAzmbamFhrbhaXnSnc76DnKCJldyYBApgWIS2z5CW5+dQrAR0KTCL7jjvFGhnN8oSMVkOd0ZEBCnnVxGQMlR6pAIEREzltiMisUz2kP104Q8Jcq7blKYJCQAA7WwQAYQSETCBAMjQzsuTMIfPZTx/4Y3MOz2WjQsIOAAiMSAhMoDqtFUg4RQY86OJmT0IEQHLpDpQijLpWJQ8fdjLp9Y0Sv9YCUh62q0sW+8DoMkS5syZ4/S/kv+9TkjHESf9dEkmVtGSKDqpggi0aMcvfKfADAQ++RIVxyJY4rKU3M6AiANCnvso8HCYl+hBIaR5FqoMokNMKwG3FsOJU1PLs+HyhQyfIu8g5+/0kMfmxmlS4gInjDM5G3LIPxmPJSbvh3MOjGFp9JyQFXwp5aKoTFBQxGnhmd+CDLtoKp/C2dQoU9TNdQhk/XR+wICTIXAO70VEAinjWqZUZjLeqyhOzTJs8xZnXs9HZpMqJkgSCMqw0DBLb+OZeBHByZdFlkspsuz7krYy2bnpOCNBM8IElCuj5H9VQR2l0NazGXRBBpmJ5AROxliF4Q8A/gcQdhGPO+/EqJBdl4uoIHOPS7NGpzAhCzGNohrldKz5cyjmF7S5UjZ6QIYkxFRIzLIVIsoSm+oIHQpvfsaBU9xh1uVMy9PPXcaclRb4vOmpEZM9wLlvyF49IYQgQnTAZ5JEcSyPZ8PSztoWWzL4JqISACmWKkEVf5hNdqviFCiBgOXFtpn9zoGqkTJcdZa9fDnm53S/JWE+s9w5OoGTXTqiwE8glKheZBwaQwCSMMNhymI5hYwzAuIOmOr0WHMgCcA0rZZqr2HbwxFTlWWRZV5kPMEUlgnPeIvsUREhslw3ZWZpOKtEUPE2DZnuv4wLzet+yeYozoeKSl6TXjDXC8QAM/WMTDzF88hbEgAR8fzag1P2I5FtOTl7ZQsIBWAO35rcoFmRs5kZky1dHJ0mlcv/4oyvgmkbNxAxnwsw8zZPzAlxcOYeoRxw7Hx9yWah/ISACYfqixKhDMgYQ0QJkQEyI/mT/9r4lbetEIbOkDFEln04pGc5VwnN97vOngVZK5wEPyl3qQVOnkvJ1sipy366DsqpnrvoOwlhKhMJziENPxs7qHgrQES51JkQMhA0o1VlsXUnZMgzbDYVnedOTJWlOrJsBOJEP7n64NR6e9bURA5iddDzXJw2aYKFiDkRQWYXFpngBCjHiM8urMwnJGCAgEBCUFq3fG4NCIQgZMgQOEFcN2s1XDMnqBsBvwIJW3epsiypRIJsLkkMBCZSusslI0gONpdFvGgyRWaTvePZjj6HPCBy5eQMApfxUjTJSEOHKcoy6AARy5x+/r7M8vYmTpSJIKcQwkA43elZ/lYWPqPJgCUbkp7VuUwCY1NyDkmuKCv+ACtB5SnpV7Jrh2YssQAwZCX6BDM+pqj24nze8QRFJaZcy0aJlZQfIjIkhixj9QD5zhmQZeyY8twEYwi24BU+ZVVT5cneMc5QVSXdNNE6uzmSlOah+4soVCxp83BCJpNkZiuooJeMJZKjIcjylCz158dKmWCKli2I/gXkSBLkVld0jEVhxCpPPly++8nkyBnlU6pKUhOxVL7zCmeqI819xBlKEGbH/rJg2Jf5gRaEIsGIacz7CTljg8RhSHs2BZd2Vg74wx8lnnAOxoqiNCoOhadyvABCIDJEJFAJFATOdITAkdAI+lvvP+Yfz2dw5sHwQEhGRQUEAgEzGUCh6y6pZX79uyfyAnIrELl/W8rV3XWLE45evafvMB6/TZOYLSD/7zC1rmxtQN75968ULa/3peHpVtetnt224cXXLeEyXJCwVDzjrhBCJITAQMpAMxIBYhrSZ6yp3XAeSA4ljAU2NAxUFAM53FhVes35IynwDFdTKnMpB5kcmw1ZWXCRAgYzOccPNFFpRAArngwUN54Ude2fBSM4lGoBJuKoE+X0qzXf6nC7PRPIyoPzHdDGKw1NlTJougsk4DgQXKCZqD247+tGL5/76vy7WUumgEIurAppuHe0c/vTXHxicsA52hD76rUcGh8JaLLG0ttLPWCXAQ196+9s3tf353/uYrMgMGJZQ4EFEhgyRSRKTZdnxx5gXFRZe6skqb/7ym67Tq+jUprYY5R1AADgsGE5HUZyOnDJz3Tb/DbmtEDMkwCmE2sLKCRassEz+7Bw6yztJ4pjJC4BJBAXIFCFgdqfLP5rs9ieyxURnOWYC/0kv5cTgRbzrzILP/ofIWCZxYrkrCogsE9MxEAwBUSJEIey0ZaUMgwSfiCRXzKq/92/bT06kDh47M6umfHh4fP/h/lhav/Mtq5mqfePeF052jsxvqham8dCze90uLTk4nkL81fOHLWSmTYKAMWQSkxhKzNmKM6ebZwAMkTEkx6axqL8Vc8IPueAkE1Vm2RHkuN1MpR+piDPCWCaxZ4xBHgzCgAE5NRUHgsjuLxms0bmJBX2gzlUrBs9RABIiy1/SRRWfLIN0Stwys9hXScMrwDxyKyNPMKME+SQvf4G8DpNsfE7wH6tGOYIchAJzy4DhZIIAEiNA04a0YVl2SiUod0tLGrytdYHFTZVv7OradWpsxfL2105Frjt/xZfev+aWi1uO94S3rGouc1sVAen5337wtd1daxdWV/ndHd0THX3jzXNmbzvQc93Kuva22pMDkb5QqjdsRpMWR6ZqqqbKisQYAolcYRGJkARxYjlnkT1ZnFoJmMw2ShUJCCY7eYqu6nSuKFcfzABZDIpUmaZ8qnTXbul7kTtgrX32tKQGyE/1EESOZJyRUKEsq8BxZ5Tf5DbJEZCKt0tWbCgSZthRk46aUY4PmUmBMI8RkMesonzIACcXEEOUAJhEiCgzZAwBGbdFKm1Ztlnmldvr/CvmVq9qrp5T5a1yMxnAxa2HXznxz+29D3/1Lb3D4aoql8JMJmmK6ooldVsgQ3BpisetGIm4IMtimpEmn89z4xf+8snrF1+4anYaFBNxPG11jSUP98UO94RODiVjaVtRFLdLVSVCBCGIE9kCLE62IMEFEXIhMu1eBJQxL5blhhDmb3A0mdNxh4lVIvtzskWRY19lXprE30mAyGGQggRmWRclsr98G83Wac66wuXpOFIz1ulKKFRN17hY5KtyxdTcQiztz7KABJTMcktxMRzbZ4xJCJIkyUwoDBRJUmRZAjIsm1upGq+0fHnDxkWNq9uqG/yMGVZsIjIy1HtqNAIEaZuFI+mxhPnP509K0XEd5UCg0uXzCokpqktVJYZo2ZZtmGRYiVg0GQv73Rh1e8dS0NMb3WmelCUCJtVU+y+oL79+4Vyuufqj5v4zEztPDHT0TER0W1ZUVZFtgYZpGzaYHGyUuCALGRfCqfsIkXG8JWFCkUfpmTlly3IrSvOJp3RLn1O3z8wxVgFlQ2ufnV8KKLb9Ql+VF13BJEacRYxy3qUgNCj0fCXDvZxi02Q+juSgO4TFXmqK3UMmekKUGCgMFBkVWVJlyaOAjMS46VZpwayaLcvbzlvQUF+m8URypH8gNDiWiqXSukG2IEl781Tyod09vUlLN/mnb75oaZ1vNJw2QdhkByr8NrJwNCUEVFR4ZIET41EXoE9VqqqCLx0f/vMTr3r8alvAdd3K2etaXIwMRZW8Hs0b8FY2VFY11Ehe73CC7+kc332052TfSCRtc9BswZIm6ZZt2mgJYXOyuODCwcBA0JS7m4W2EJ1uwuzqE5M7Rs6rQYbwJyhPVwypyNlkILfMIheERCLj4fhUJEcIkc+CmY6UIIRARHTNb56OqThZZhZUnMplDQsRKa91IGdY2SR2Spm+VBKBJCZBT4RcgaLIsIqOLRuWEQIgA0mSVIkpEngUdGuKC7kGRkO557ylbReuXbCgqRq5ERseGhsaTIRidtogW1i2rTCIW8oD20ef3Dt0yUUrbr5yed+Z4Yce3zo4Eh8eSixtq10wf/aTrx6or/RcvmURStIjz+9J23DTJWs7jvftPtTdMqu8vilw0zWbA/7gnx/fduDwmZs3Nr57TaVXBUJ0aQpTLOx1u8u85fW1FZW1QtG6hsLbDpzYdqC7dyxpomaSpm2RsoVpC9MmLgTnKIgEoci4r8IbTA6FWmBWAonlte9nXEPGVyEBCadIT1jKsIqgUadCxYqez6dQF/UQz+DDJLmqbKYEEvKptJipxGU4Qk6NOXe+MAkWAcvvXcik1YWFi5yvmqTLoUDmVPaBM5ZNOXGqr87mPhlwU5JQkSVNltyqXOZWPAq5SV9Q53/r5avuvOXyS9cuCEoUjae4dzGpQUqNMSBEtAQxlJ47Fr/nscNbj4/4goG2ispI98Bsn3zVurabr14/lBDjo2N/+MaNy1cs2b/75H1fvWTTiqa/PHn03u9++KqVdfc/uef8S9bd84lrV9e5J4bDhw73WAL7I7Hdx4f2dEfKA4FZVV5VY56Azxfwu8orXU2bLbk2Geqr9ilrl83fvGZJTdAVjYRS8YSkSJqsMEKGhCgjOdU9YE7aUQCpZtIbBEaEgAycPC4TuFJeHTIvT8+J8iFAsR4CFrQcYgZCw6kZYuY+Ul6rlphaVM45C0mqDJ5LwWgSc8E8DDef1Y4ZhaVMlgtQsopXDLrkm4uTSUsoSvMXKG/vc4p0IEmoyExTmEdlAZcSVMkN+rxa9+3XrPnQ265cu6BZxEfDw0N6MuZvuSjQcI2ncrFtDOkT3dzkLkV+fN/Y9x49+rVhLrk06fXDXSPhI73DMxO3bF0YatH3Nba0BEO7No3XFbpL6+p8LklyZKyE00IUAZRAEQp0pY0lO39k6EjoUhZ9Yp1NfXN7oZ6X9P8CpsX9h6P7u8Yf6Yv9OqeU68fGZ+IsIDLV9YI8Hj8S9fUrF9SV+nx+T0SCAKAcAglpUay5tI62Xmif+bAoaH9h3uHe2Z8fnnrxrY7tiyYVxOory3vPtL3yv7+R597Y6RrqH8idvKUnNREhVfSNDYyYvUPT1/Y0rR8YVPH8rZV88srK4JeL29fXN8S8OzvGPu7x/cdPhme7B6Y6E/ZtoY0N1aE6it9gYDLC4yKqK6LshwK+L0Br9uNENRto7E2WOF3Y1L62/v6z07EnnnjX674P2p77zA5rir9+K7KOoeuE68pZ6UqP6U3y5pS56A8Z03bePq8tAnD64GZreWp6jIn5Cxb+Z6zD4SSTf7GZ6UqX8l2qS7T7D4nS89UuP/HhPy/vX6xK8vSbeu2Z0O5MreYl4mZ3X+BvOnV0E7uW+CAnS259+F5X06Zof9Z99W6Q69uJp59OJoZ7oD8n0VInA/k5O8HlyzI5pU+t0VmdvKj+b9Z7vH9PzD8v9yT9fD8/T3S4u2Hl/v/Bv9tO0cAAA==";
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MessageSquare, 
  Send, 
  ChevronRight, 
  Star, 
  Trophy, 
  Gift, 
  UserPlus, 
  Zap,
  Menu,
  ShieldCheck,
  Clock
} from 'lucide-react';

const AnnouncementHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gold h-10 flex items-center overflow-hidden">
      <div className="flex-1 overflow-hidden relative">
        <motion.div 
          animate={{ x: [1000, -2000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center gap-8"
        >
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Zap className="w-4 h-4 fill-black" /> 🎉 LIMITED TIME OFFER — Join Now & Get 200% Welcome Bonus!
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Clock className="w-4 h-4" /> 24/7 Live Support Available
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Star className="w-4 h-4 fill-black" /> DAILY JACKPOTS EXCEEDING $100,000+
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> SECURE & INSTANT WITHDRAWALS
          </span>
        </motion.div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="px-4 text-black hover:opacity-70 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-10 left-0 w-full z-40 px-6 py-4 flex items-center justify-between premium-blur">
      <div className="flex items-center gap-3">
        <img 
          src={LOGO_BASE64} 
          alt="Home of Luck" 
          className="w-14 h-14 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="text-lg font-black tracking-tighter text-gold leading-none italic uppercase">HOME OF LUCK</span>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] leading-tight">ONLINE SLOTS</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
        <a href="#bonuses" className="hover:text-gold transition-colors">Bonuses</a>
        <a href="#" className="hover:text-gold transition-colors">VIP Lounge</a>
        <a href="#" className="hover:text-gold transition-colors">Games</a>
        <a href="#" className="hover:text-gold transition-colors">Promotions</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-bold text-white/80 hover:text-white transition-colors">Login</button>
        <button className="bg-emerald-gradient text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform border border-gold/30">
          Sign Up
        </button>
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gold" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-deep/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block border border-gold/30 text-gold text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            EST. 2024 • THE PREMIUM CHOICE
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight select-none">
            UNLEASH YOUR <br />
            <span className="text-gold-gradient italic">WINNING STREAK</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
            Experience the world's most exclusive online destination for elite players. 
            Luxury meets opportunity at Home of Luck Online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-emerald-gradient text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_0_30px_rgba(0,104,69,0.4)] hover:shadow-[0_0_40px_rgba(0,104,69,0.6)] transition-all flex items-center gap-2 group border border-gold/30">
              CLAIM $1,000 WELCOME PACK
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              EXPLORE GAMES
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 text-gray-500 text-xs font-bold tracking-widest uppercase opacity-50">
        <span>SLOTS</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>ROULETTE</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>BLACKJACK</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>LIVE CASINO</span>
      </div>
    </header>
  );
};

const BonusCard = ({ title, amount, description, icon: Icon }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-black/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-gold/10 p-4 rounded-2xl mb-6 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-10 h-10 text-gold" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{title}</h3>
      <div className="text-4xl font-black text-gold mb-4 tracking-tighter italic">
        {amount}
      </div>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {description}
      </p>
      <button className="w-full py-4 rounded-xl border border-gold/30 text-gold font-bold text-sm group-hover:bg-gold group-hover:text-black transition-all">
        Claim Now
      </button>
    </motion.div>
  );
};

const BonusesSection = () => {
  const bonuses = [
    {
      title: "Welcome Bonus",
      amount: "200% BONUS",
      description: "Multiply your first deposit up to $500. New players only.",
      icon: Trophy
    },
    {
      title: "Free Spins",
      amount: "50 SPINS",
      description: "Enjoy 50 free rounds on our most popular elite slots machines.",
      icon: Zap
    },
    {
      title: "Reload Bonus",
      amount: "100% UP TO $500",
      description: "Keep the action going with a full match on your second deposit.",
      icon: Gift
    },
    {
      title: "VIP Loyalty",
      amount: "5% CASHBACK",
      description: "Exclusive weekly cashback and elite rewards for our VIP members.",
      icon: UserPlus
    }
  ];

  return (
    <section id="bonuses" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            Our Exclusive <span className="text-gold italic">Bonuses</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Elite rewards designed for premium players. Boost your gameplay with Home of Luck's industry-leading promotions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <BonusCard key={i} {...bonus} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Welcome to Home of Luck! How can we help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { type: 'user', text: inputValue }]);
    setInputValue('');
    
    // Simple bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Thank you for your message! Our agent will be with you shortly." }]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: 'user', text: reply }]);
    setTimeout(() => {
      if (reply === 'Claim Bonus') {
        setMessages(prev => [...prev, { type: 'bot', text: "Excellent choice! You can find all current bonuses on our /bonuses section. Would you like me to take you there?" }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: "Sure! Let me provide more information on that for you." }]);
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-navy-dark border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-emerald p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/50">
                  <Trophy className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-sm leading-none">LUCK BOT</h4>
                  <span className="text-[10px] text-white/60 font-bold uppercase">Online • Support Agent</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-50 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-black/60 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-medium ${
                    msg.type === 'user' 
                      ? 'bg-gold text-black rounded-tr-none' 
                      : 'bg-white/10 text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Claim Bonus', 'How to Register', 'Contact Support'].map(reply => (
                    <button 
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold hover:bg-gold hover:text-black transition-all"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder:text-gray-500"
              />
              <button 
                onClick={handleSend}
                className="p-2 rounded-xl bg-gold text-black hover:scale-110 active:scale-95 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] group relative"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gold opacity-30 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        />
        <MessageSquare className="w-8 h-8 text-black relative z-10 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={LOGO_BASE64} 
            alt="Home of Luck" 
            className="w-32 h-32 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black tracking-tighter text-gold italic uppercase">HOME OF LUCK</span>
            <span className="text-xs font-bold text-white/30 tracking-[0.3em]">ONLINE SLOTS</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-gold transition-colors">Responsible Gaming</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Affiliate Program</a>
        </div>

        <div className="text-center text-gray-600 text-[10px] max-w-2xl px-4 leading-loose">
          Copyright © 2024 Home of Luck Online. All rights reserved. Play responsiblity. 18+ only. 
          Home of Luck is licensed and regulated in various jurisdictions. Gambling can be addictive. 
          Please game responsibly and use the provided tools to limit your play.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-navy-dark min-h-screen">
      <AnnouncementHeader />
      <Navbar />
      <Hero />
      <BonusesSection />
      
      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              JOIN THE <span className="text-gold italic">ELITE CIRCLE</span> <br />
              TODAY
            </h2>
            <button className="bg-gold text-black px-12 py-6 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all">
              REGISTER IN 30 SECONDS
            </button>
            <p className="mt-6 text-gray-500 font-bold text-sm tracking-wide">
              NO DEPOSIT REQUIRED TO BROWSE OUR GAMES
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <SupportChat />
    </main>
  );
}
