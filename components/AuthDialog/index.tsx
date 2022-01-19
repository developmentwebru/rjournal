import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./AuthDialog.module.scss";

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "email">("main");

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === "main" ? (
                "Вход в TJ"
              ) : (
                <>
                  <p
                    onClick={() => setFormType("main")}
                    className={styles.backTitle}
                  >
                    <ArrowBackIcon />
                    Войти через почту
                  </p>
                </>
              )}
            </Typography>
            {formType === "main" && (
              <>
                <div>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                        fill="#0077FF"
                      />
                      <path
                        d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                        fill="white"
                      />
                    </svg>
                    Вконтакте
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                          fill="#4285F4"
                          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                      </g>
                    </svg>
                    Google
                  </Button>
                  <Button
                    onClick={() => setFormType("email")}
                    className="mb-15"
                    variant="contained"
                    fullWidth
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1000 1000"
                    >
                      <g>
                        <path d="M856.4,99.1H143.6C69.8,99.1,10,158.9,10,232.7v534.5c0,73.8,59.8,133.6,133.6,133.6h712.7c73.8,0,133.6-59.8,133.6-133.6V232.7C990,158.9,930.2,99.1,856.4,99.1z M856.4,188.2c5.1,0,10.1,0.9,14.7,2.5L500,487.5L129,190.7c4.6-1.6,9.5-2.5,14.7-2.5L856.4,188.2L856.4,188.2z M856.4,811.8H143.6c-24.6,0-44.5-19.9-44.5-44.5V280.9l373.1,298.5c8.1,6.5,18,9.8,27.8,9.8s19.7-3.3,27.8-9.8l373.1-298.5v486.4C900.9,791.9,881,811.8,856.4,811.8z" />
                      </g>
                    </svg>
                    Через почту
                  </Button>
                </div>
                <div className={styles.miniButtons}>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      height="2500"
                      imageRendering="optimizeQuality"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      viewBox="17006.82 17511.1 8157.800000000003 8157.800000000003"
                      width="1618"
                    >
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="21085.72"
                        x2="21085.72"
                        y1="18249.39"
                        y2="25150.62"
                      >
                        <stop offset="0" stopColor="#00b2ff" />
                        <stop offset="1" stopColor="#006aff" />
                      </linearGradient>
                      <circle cx="21085.72" cy="21590" fill="#fff" r="4078.9" />
                      <path
                        d="M21085.72 18309.17c1811.95 0 3280.83 1468.88 3280.83 3280.83s-1468.88 3280.83-3280.83 3280.83-3280.83-1468.88-3280.83-3280.83 1468.88-3280.83 3280.83-3280.83z"
                        fill="url(#a)"
                      />
                      <path
                        d="M21512.01 24843.29v-2534.17h714.43l94.7-891.91h-809.13l1.2-446.44c0-232.63 22.1-357.22 356.24-357.22h446.68v-892.06h-714.59c-858.35 0-1160.42 432.65-1160.42 1160.34v535.45h-535.07v891.99h535.07v2498.09c208.45 41.53 423.95 63.47 644.6 63.47a3310.9 3310.9 0 0 0 426.29-27.54z"
                        fill="#fff"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      height="1684"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404"
                      width="2500"
                    >
                      <path
                        d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359"
                        fill="#1da1f2"
                      />
                    </svg>
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="4 32 376.4 449.4"
                      width="2230"
                      height="2500"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </Button>
                </div>
              </>
            )}
            {formType === "email" && (
              <div>
                <form className="mt-20">
                  <TextField
                    className="mb-20"
                    size="small"
                    required
                    fullWidth
                    label="Почта"
                    variant="outlined"
                  />
                  <TextField
                    className="mb-10"
                    size="small"
                    required
                    fullWidth
                    type="password"
                    label="Пароль"
                    variant="outlined"
                  />
                  <Button
                    className="mt-10"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Войти
                  </Button>
                </form>
              </div>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
