import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>⚡</Text>
        <Text style={styles.brand}>PayFast</Text>
        <Text style={styles.tagline}>Secure. Fast. Reliable.</Text>
      </View>

      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.subheading}>Sign in to your account to continue</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/home")}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3D3E",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 40,
  },
  brand: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 6,
  },
  tagline: {
    fontSize: 13,
    color: "#9fb6b3",
    marginTop: 4,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    color: "#9fb6b3",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#164E4C",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#fff",
    marginBottom: 14,
  },
  btn: {
    width: "100%",
    height: 52,
    backgroundColor: "#06b6d4",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 14,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgot: {
    color: "#06b6d4",
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#164E4C",
  },
  or: {
    color: "#9fb6b3",
    marginHorizontal: 12,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  socialBtn: {
    flex: 1,
    height: 48,
    backgroundColor: "#164E4C",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  socialText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  signupRow: {
    flexDirection: "row",
    marginTop: 24,
  },
  signupText: {
    color: "#9fb6b3",
    fontSize: 14,
  },
  signupLink: {
    color: "#06b6d4",
    fontSize: 14,
    fontWeight: "bold",
  },
});
