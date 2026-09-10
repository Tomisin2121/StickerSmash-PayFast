import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, John</Text>
          <Text style={styles.sub}>Welcome to PayFast</Text>
        </View>
        <TouchableOpacity style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$24,562.80</Text>
        <Text style={styles.balanceChange}>+$1,240 this week</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>💸</Text>
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>📥</Text>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>💳</Text>
          <Text style={styles.actionText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionIcon}>➕</Text>
          <Text style={styles.actionText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      <View style={styles.transaction}>
        <View style={styles.txnLeft}>
          <Text style={styles.txnIcon}>🛒</Text>
          <View>
            <Text style={styles.txnName}>Amazon</Text>
            <Text style={styles.txnDate}>Today, 2:30 PM</Text>
          </View>
        </View>
        <Text style={styles.txnMinus}>-$126.00</Text>
      </View>

      <View style={styles.transaction}>
        <View style={styles.txnLeft}>
          <Text style={styles.txnIcon}>💰</Text>
          <View>
            <Text style={styles.txnName}>Salary</Text>
            <Text style={styles.txnDate}>Yesterday</Text>
          </View>
        </View>
        <Text style={styles.txnPlus}>+$4,500.00</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3D3E",
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  sub: {
    fontSize: 13,
    color: "#9fb6b3",
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#06b6d4",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  balanceCard: {
    backgroundColor: "#164E4C",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 28,
  },
  balanceLabel: {
    fontSize: 13,
    color: "#9fb6b3",
  },
  balanceAmount: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 8,
  },
  balanceChange: {
    fontSize: 13,
    color: "#06b6d4",
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  actionBtn: {
    backgroundColor: "#164E4C",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    width: "22%",
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 14,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#164E4C",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  txnLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  txnIcon: {
    fontSize: 22,
  },
  txnName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  txnDate: {
    color: "#9fb6b3",
    fontSize: 12,
    marginTop: 2,
  },
  txnMinus: {
    color: "#f87171",
    fontSize: 15,
    fontWeight: "bold",
  },
  txnPlus: {
    color: "#34d399",
    fontSize: 15,
    fontWeight: "bold",
  },
  logoutBtn: {
    marginTop: 20,
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#06b6d4",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#06b6d4",
    fontSize: 14,
    fontWeight: "bold",
  },
});
